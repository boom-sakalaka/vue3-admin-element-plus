<!--
 * @Author: GZH
 * @Date: 2021-11-14 20:03:30
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-26 15:25:20
 * @FilePath: \vue3-admin\src\layout\index.vue
 * @Description: 登录鉴权的页面
-->
<template>
  <div class="app-wrapper" :class="[$store.getters.sidebarOpened ? 'openSidebar' : 'hideSidebar']">
    <!-- 左侧mune -->
    <sidebar
      id="guide-sidebar"
      class="sidebar-container"
      :style="{ backgroundColor: $store.getters.cssVar.menuBg }"
    />
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部navbar -->
        <navbar />
        <!-- tags -->
        <tag-view></tag-view>
      </div>
      <!-- 内容区 -->
      <app-main />
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar'
import AppMain from './components/AppMain.vue'
import TagView from '../components/tagsView'

// import variables from '@/styles/variables.scss'
</script>
<style lang="scss" scoped>
@import '../styles/mixin.scss';
@import '../styles/variables.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width #{$sideBarDuration};
}
.hideSidebar {
  .fixed-header {
    width: calc(100% - #{$hideSideBarWidth});
  }
}
</style>
