<!--
 * @Author: GZH
 * @Date: 2021-11-14 15:58:11
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-13 21:23:54
 * @FilePath: \vue3-admin\src\components\SvgIcon\index.vue
 * @Description:
-->
<!--  -->
<template>
  <!-- 展示外部图标 -->
  <div
    class="svg-external-icon svg-icon"
    v-if="isExternal"
    :style="styleExternalIcon"
    :class="className"
  ></div>
  <!-- 展示内部图标 -->
  <svg v-else class="svg-icon" :class="className" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup>
import { isExternal as external } from '@/utils/validate'
import { defineProps, computed } from 'vue'
const props = defineProps({
  // icon
  icon: {
    type: String,
    required: true
  },
  // 图标类名
  className: {
    type: String,
    default: ''
  }
})

// 判断当前图标是否为外部图标
const isExternal = computed(() => external(props.icon))

// 外部图标样式
const styleExternalIcon = computed(() => ({
  mask: `url(${props.icon}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`
}))

// 内部图标
const iconName = computed(() => `#icon-${props.icon}`)
</script>

<style scoped lang="scss">
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
