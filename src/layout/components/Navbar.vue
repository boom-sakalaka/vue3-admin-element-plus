<!--
 * @Author: GZH
 * @Date: 2021-11-15 20:34:25
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-05 20:19:26
 * @FilePath: \vue3-admin-element-plus\src\layout\components\Navbar.vue
 * @Description:
-->
<template>
  <div class="navbar">
    <hamburger class="hambruger-container" id="guide-hamburger" />
    <breadcrumb class="breadcrumb-container" id="guide-breadcrumb" />
    <div class="right-menu">
      <guide class="right-menu-item hover-effect"></guide>
      <header-search class="right-menu-item hover-effect" id="guide-search"></header-search>
      <screen-full class="right-menu-item hover-effect" id="guide-full"></screen-full>
      <lange-select class="right-menu-item hover-effect"></lange-select>
      <theme-select class="right-menu-item hover-effect"></theme-select>

      <!-- 头像 -->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar
            shape="square"
            :size="40"
            :src="$store.getters.userInfo.avatar + '1'"
          ></el-avatar>
          <i class="el-icon-s-tools"></i>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item>{{ $t('msg.navBar.home') }}</el-dropdown-item>
            </router-link>
            <a href="#" target="_blank">
              <el-dropdown-item>{{ $t('msg.navBar.course') }}</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="logout">
              {{ $t('msg.navBar.logout') }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
import { useStore } from 'vuex'
import Hamburger from '@/components/hamburger'
import Breadcrumb from '@/layout/components/Breadcrumb'
import LangeSelect from '@/components/LangSelect'
import ThemeSelect from '@/components/ThemeSelect'
import ScreenFull from '@/components/Scrennfull'
import HeaderSearch from '@/components/HeaderSearch'
import Guide from '@/components/Guide'

const store = useStore()
const logout = () => {
  store.dispatch('user/logout')
}
</script>
<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .hambruger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    // hover 动画
    transition: background 0.5s;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
  .breadcrumb-container {
    float: left;
  }
  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;

    :deep(.right-menu-item) {
      display: inline-block;
      padding: 0 18px 0 0;
      font-size: 24px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
      }
    }
    :deep(.avatar-container) {
      cursor: pointer;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        :deep(.el-avatar) {
          --el-avatar-background-color: none;
          margin-right: 12px;
        }
      }
    }
  }
}
</style>
