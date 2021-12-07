<!--
 * @Author: GZH
 * @Date: 2021-12-07 20:12:37
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-07 20:20:07
 * @FilePath: \vue3-admin\src\layout\components\Sidebar\SidebarMenu.vue
 * @Description:
-->
<template>
  <el-menu
    default-active="2"
    :unique-opened="true"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-submenu index="1">
      <template #title>
        <i class="el-icon-location"> </i>
        <span>导航一</span>
      </template>
      <el-menu-item index="1-1">选项一</el-menu-item>
      <el-menu-item index="1-2">选项二</el-menu-item>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-location"></i>
      <template #title>导航4</template>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'SidebarMenu'
}
</script>

<script setup></script>
<style lang="scss" scoped></style>
