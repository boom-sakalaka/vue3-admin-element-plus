<!--
 * @Author: GZH
 * @Date: 2022-01-02 16:36:56
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-23 19:21:23
 * @FilePath: \vue3-admin-element-plus\src\views\role-list\index.vue
 * @Description:
-->
<template>
  <div class="">
    <el-card>
      <el-table :data="allRoles" border style="width: 100%">
        <el-table-column :label="$t('msg.role.index')" type="index" width="120"></el-table-column>
        <el-table-column :label="$t('msg.role.name')" prop="title"></el-table-column>
        <el-table-column :label="$t('msg.role.desc')" prop="describe"></el-table-column>
        <el-table-column :label="$t('msg.role.action')" width="200" #default="{ row }">
          <el-button
            type="primary"
            size="mini"
            @click="onDistributepermissionClick(row)"
            v-permission="['distributePermission']"
          >
            {{ $t('msg.role.assignPermissions') }}
          </el-button>
        </el-table-column>
      </el-table>
    </el-card>
    <distributepermission v-model="visible" :roleId="selectRoleId" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { roleList } from '@/api/role'
import { watchSwitchLang } from '@/utils/i18n'
import Distributepermission from './components/Distributepermission.vue'

const allRoles = ref([])
const getRoleList = async () => {
  allRoles.value = await roleList()
}
getRoleList()
watchSwitchLang(getRoleList)

const visible = ref(false)
const selectRoleId = ref('')
const onDistributepermissionClick = (row) => {
  visible.value = true
  selectRoleId.value = row.id
}
</script>

<style lang="scss" scoped></style>
