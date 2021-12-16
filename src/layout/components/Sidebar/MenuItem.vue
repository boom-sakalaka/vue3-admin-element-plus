<!--
 * @Author: GZH
 * @Date: 2021-12-09 21:38:29
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-16 09:50:48
 * @FilePath: \vue3-admin\src\layout\components\Sidebar\MenuItem.vue
 * @Description:
-->
<template>
  <i v-if="icon.includes('el-icon')" class="sub-el-icon" :class="icon"></i>
  <svg-icon v-else :icon="icon" />
  <span>{{ generateTitle(title) }}</span>
</template>

<script setup>
import { defineProps } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
import { generateTitle } from '@/utils/i18n'

defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>

<script>
export default {
  name: 'menuItem'
}
</script>
<style lang="scss" scoped></style>
