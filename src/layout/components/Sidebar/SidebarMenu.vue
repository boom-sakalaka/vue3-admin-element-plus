<!--
 * @Author: GZH
 * @Date: 2021-12-07 20:12:37
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-09 22:05:20
 * @FilePath: \vue3-admin\src\layout\components\Sidebar\SidebarMenu.vue
 * @Description:
-->
<template>
  <el-menu
    :default-active="activeMenu"
    :unique-opened="true"
    :background-color="$store.getters.cssVar.menuBg"
    :text-color="$store.getters.cssVar.menuText"
    :active-text-color="$store.getters.cssVar.menuActiveText"
    router
  >
    <sidebar-item v-for="item in routes" :key="item.path" :route="item" />
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import SidebarItem from './SidebarItem'
import { filterRoutes, generateMenus } from '@/utils/route'

const router = useRouter()

const routes = computed(() => {
  const filterRoute = filterRoutes(router.getRoutes())
  return generateMenus(filterRoute)
})

// 默认激活项
const route = useRoute()
const activeMenu = computed(() => {
  const { meta, path } = route
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
})
</script>

<style lang="scss" scoped></style>
