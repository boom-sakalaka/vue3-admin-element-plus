<!--
 * @Author: GZH
 * @Date: 2022-01-04 22:06:09
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-04 23:15:37
 * @FilePath: \vue3-admin-element-plus\src\views\profile\components\ProjectCard.vue
 * @Description: 项目介绍
-->
<template>
  <div>
    <pan-thumb :image="$store.getters.userInfo.avatar" height="100px" width="100px">
      <div>Hello</div>
      {{ $store.getters.userInfo.title }}
    </pan-thumb>
  </div>
</template>

<script setup>
import {} from 'vue'
import PanThumb from '@/components/PanThumb'
</script>
<style lang="scss" scoped></style>
