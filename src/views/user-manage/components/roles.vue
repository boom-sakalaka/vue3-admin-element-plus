<!--
 * @Author: GZH
 * @Date: 2022-01-09 20:13:10
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-09 20:54:18
 * @FilePath: \vue3-admin-element-plus\src\views\user-manage\components\roles.vue
 * @Description:
-->
<template>
  <el-dialog :title="$t('msg.excel.roleDialogTitle')" :model-value="modelValue" @close="closed">
    <!-- 内部 -->
    <el-checkbox-group v-model="userRolesTitleList">
      <el-checkbox v-for="item in allRoleList" :key="item.id" :label="item.title"></el-checkbox>
    </el-checkbox-group>
    <!-- 底部 -->
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="closed">{{ $t('msg.universal.cancel') }}</el-button>
        <el-button @click="onComfirm" type="primary">{{ $t('msg.universal.confirm') }}</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue'
import { roleList } from '@/api/role'
import { watchSwitchLang } from '@/utils/i18n'
import { userRoles, updateRole } from '@/api/user-manage'
import { ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
})

const emits = defineEmits(['update:modelValue', 'updateRole'])
const closed = () => {
  emits('update:modelValue', false)
}
const i18n = useI18n()
const onComfirm = async () => {
  const roles = userRolesTitleList.value.map((title) => {
    return allRoleList.value.find((role) => role.title === title)
  })

  await updateRole(props.userId, roles)
  ElMessage.success(i18n.t('msg.role.updateRoleSuccess'))
  emits('updateRole')
  closed()
}

// 所有角色
const allRoleList = ref([])
const getListData = async () => {
  allRoleList.value = await roleList()
}
getListData()
watchSwitchLang(getListData)

// 当前用户角色
const userRolesTitleList = ref([])
const getUserRoles = async () => {
  const res = await userRoles(props.userId)
  userRolesTitleList.value = res.role.map((item) => item.title)
}

watch(
  () => props.userId,
  (val) => {
    if (val) getUserRoles()
  }
)
</script>
<style lang="scss" scoped></style>
