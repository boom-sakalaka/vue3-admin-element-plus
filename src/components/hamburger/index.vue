<!--
 * @Author: GZH
 * @Date: 2021-12-09 23:15:48
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-09 23:28:59
 * @FilePath: \vue3-admin\src\components\hamburger\index.vue
 * @Description:
-->

<template>
  <div class="hamburger-container" @click="toggleClick">
    <svg-icon class="hamburger" :icon="icon" />
  </div>
</template>

<script>
export default {
  name: 'hamburger'
}
</script>

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
.hamburger-container {
  padding: 0 16px;
  .humburger {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }
}
</style>
