<!--
 * @Author: GZH
 * @Date: 2021-12-09 23:15:48
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-13 21:30:31
 * @FilePath: \vue3-admin\src\components\hamburger\index.vue
 * @Description:
-->

<template>
  <div class="hamburger-contain" @click="toggleClick">
    <svg-icon :icon="icon" />
  </div>
</template>

<!-- <script>
export default {
  name: 'hamburger'
}
</script> -->

<script setup>
/* eslint-disable import/first */
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const icon = computed(() => {
  return store.getters.sidebarOpened ? 'hamburger-opened' : 'hamburger-closed'
})
const toggleClick = () => {
  store.commit('app/triggersidebarOpened')
}
</script>

<style lang="scss" scoped>
.hamburger-contain {
  padding: 0 16px;
}
</style>
