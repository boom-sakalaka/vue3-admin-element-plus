<!--
 * @Author: GZH
 * @Date: 2022-01-02 16:36:56
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-09 20:00:23
 * @FilePath: \vue3-admin-element-plus\src\views\permission-list\index.vue
 * @Description:
-->
<template>
  <div class="">
    <el-card>
      <el-table
        :data="allpermission"
        style="width: 100%"
        border
        row-key="id"
        default-expand-all
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column
          prop="permissionName"
          :label="$t('msg.permission.name')"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="permissionMark"
          :label="$t('msg.permission.mark')"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="permissionDesc"
          :label="$t('msg.permission.desc')"
          width="180"
        ></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { permissionList } from '@/api/permission'
import { watchSwitchLang } from '@/utils/i18n'

const allpermission = ref([])
const getPermissionList = async () => {
  allpermission.value = await permissionList()
}

getPermissionList()
watchSwitchLang(getPermissionList)
</script>

<style lang="scss" scoped></style>
