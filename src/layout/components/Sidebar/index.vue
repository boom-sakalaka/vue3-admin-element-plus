<!--
 * @Author: GZH
 * @Date: 2021-11-15 20:33:47
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-13 20:29:46
 * @FilePath: \vue3-admin\src\layout\components\Sidebar\index.vue
 * @Description:
-->
<template>
  <div>
    <div class="logo-container">
      <el-avatar size="44" shape="square" :src="$store.getters.userInfo.avatar"></el-avatar>
      <h1 class="logo-title" v-if="$store.getters.sidebarOpened">imooc-admin</h1>
    </div>
    <el-scrollbar> <SidebarMenu /></el-scrollbar>
  </div>
</template>

<script setup>
import {} from 'vue'
import SidebarMenu from './SidebarMenu.vue'
</script>
<style lang="scss" scoped>
.logo-container {
  height: 44px;
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>
