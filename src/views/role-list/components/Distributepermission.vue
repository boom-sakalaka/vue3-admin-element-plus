<!--
 * @Author: GZH
 * @Date: 2022-01-23 16:35:14
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-23 17:12:40
 * @FilePath: \vue3-admin-element-plus\src\views\role-list\components\Distributepermission.vue
 * @Description:
-->
<template>
  <el-dialog :title="$t('msg.excel.roleDialogTitle')" :model-value="modelValue" @close="closed">
    <el-tree
      ref="treeRef"
      :data="allPermission"
      :props="defaultProps"
      node-key="id"
      show-checkbox
      check-strictly
      default-expand-all
    ></el-tree>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closed">{{ $t('msg.universal.cancel') }}</el-button>
        <el-button type="primary" @click="onConfirm">{{ $t('msg.universal.confirm') }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue'
import { rolePermission, distributePermission } from '@/api/role'
import { watchSwitchLang } from '@/utils/i18n'
import { permissionList } from '../../../api/permission'
import { ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  roleId: {
    type: String,
    required: true
  }
})

const emits = defineEmits(['update:modelValue'])

const i18n = useI18n()
const onConfirm = async () => {
  await distributePermission({
    roleId: props.roleId,
    permissions: treeRef.value.getCheckedKeys()
  })
  ElMessage.success(i18n.t('msg.role.updateRoleSuccess'))
  closed()
}

const closed = () => {
  emits('update:modelValue')
}

// 所有权限
const allPermission = ref([])
const getPermissionList = async () => {
  allPermission.value = await permissionList()
}
getPermissionList()
watchSwitchLang(getPermissionList)

/* 属性结构配置 */
const defaultProps = {
  children: 'children',
  label: 'permissionName'
}

// 当前角色的权限
const treeRef = ref()
const getRolePermission = async () => {
  const checkedKey = await rolePermission(props.roleId)
  treeRef.value.setCheckedKeys(checkedKey)
}

watch(
  () => props.roleId,
  (val) => {
    if (val) getRolePermission()
  }
)
</script>
<style lang="scss" scoped></style>
