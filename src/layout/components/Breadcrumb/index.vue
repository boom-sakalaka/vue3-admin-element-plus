<!--
 * @Author: GZH
 * @Date: 2021-12-13 20:47:56
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-13 21:50:04
 * @FilePath: \vue3-admin\src\layout\components\Breadcrumb\index.vue
 * @Description:
-->
<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <!-- <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
    <el-breadcrumb-item>
      <span class="no-redirect">活动详情</span>
    </el-breadcrumb-item> -->
  </el-breadcrumb>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

// 生成数组数据
const breadcrumData = ref([])
const getBreadcrumData = () => {
  // 当前路由的标准化路由记录
  breadcrumData.value = route.matched.filter((item) => item.meta && item.meta.title)
}

// 监听路由变化
const route = useRoute()
watch(
  route,
  () => {
    getBreadcrumData()
  },
  {
    immediate: true
  }
)
</script>

<!-- <script>
export default {
  name: 'breadcrumb'
}
</script> -->

<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  :deep(.no-redirect) {
    color: #97a8be;
    cursor: text;
  }
}
</style>
