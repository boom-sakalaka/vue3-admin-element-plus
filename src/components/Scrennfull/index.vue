<!--
 * @Author: GZH
 * @Date: 2021-12-19 21:37:40
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-19 21:47:53
 * @FilePath: \vue3-admin\src\components\Scrennfull\index.vue
 * @Description: 全屏组件
-->
<template>
  <div @click="onToggle">
    <svg-icon :icon="isFullscreen ? 'exit-fullscreen' : 'fullscreen'"></svg-icon>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import screenfull from 'screenfull'

// 是否是全屏
const isFullscreen = ref(false)
const onToggle = () => {
  screenfull.toggle()
}

const change = () => {
  isFullscreen.value = screenfull.isFullscreen
}

// on 监听screenfull
onMounted(() => {
  screenfull.on('change', change)
})
// off 取消监听
onUnmounted(() => {
  screenfull.off('change', change)
})
</script>
<style lang="scss" scoped></style>
