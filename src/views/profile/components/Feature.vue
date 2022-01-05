<!--
 * @Author: GZH
 * @Date: 2022-01-04 22:06:36
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-05 20:33:43
 * @FilePath: \vue3-admin-element-plus\src\views\profile\components\Feature.vue
 * @Description: 功能
-->
<template>
  <el-collapse v-model="activeName">
    <el-collapse-item v-for="item in features" :key="item.id" :name="item.id" :title="item.title">
      <div v-html="item.content"></div>
    </el-collapse-item>
  </el-collapse>
</template>

<script setup>
import { defineProps, ref } from 'vue'

defineProps({
  features: {
    type: Array,
    required: true
  }
})

const activeName = ref(0)
</script>
<style lang="scss" scoped>
:deep(.el-collapse-item__header) {
  font-weight: bold;
}
.el-collapse-item {
  :deep(a) {
    color: #2d62f7;
    margin: 0 4px;
  }
}
</style>
