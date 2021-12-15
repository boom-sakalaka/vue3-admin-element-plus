<!--
 * @Author: GZH
 * @Date: 2021-12-09 21:30:31
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-15 20:58:47
 * @FilePath: \vue3-admin\src\layout\components\Sidebar\SidebarItem.vue
 * @Description:
-->
<template>
  <el-sub-menu v-if="route.children.length > 0" :index="route.path">
    <template #title>
      <menu-item :title="route.meta.title" :icon="route.meta.icon"></menu-item>
    </template>

    <sidebar-item v-for="item in route.children" :key="item.path" :route="item"></sidebar-item>
  </el-sub-menu>
  <el-menu-item v-else :index="route.path">
    <menu-item :title="route.meta.title" :icon="route.meta.icon"></menu-item>
  </el-menu-item>
</template>

<script setup>
import { defineProps } from 'vue'
import MenuItem from './MenuItem.vue'

defineProps({
  route: {
    type: Object,
    required: true
  }
})
</script>
<script>
export default {
  name: 'sidebarItem'
}
</script>
<style lang="scss" scoped></style>
