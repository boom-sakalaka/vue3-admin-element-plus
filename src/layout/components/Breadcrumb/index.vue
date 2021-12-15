<!--
 * @Author: GZH
 * @Date: 2021-12-13 20:47:56
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-14 21:29:22
 * @FilePath: \vue3-admin\src\layout\components\Breadcrumb\index.vue
 * @Description:
-->
<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in breadcrumData" :key="item.path">
        <!-- 不可点击项目 -->
        <span v-if="index === breadcrumData.length - 1" class="no-redirect">
          {{ item.meta.title }}
        </span>
        <!-- 可点击项 -->
        <span v-else class="redirect" @click="onLinkClick(item)">
          {{ item.meta.title }}
        </span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { useStore } from 'vuex'
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

const onLinkClick = () => {}

// 将来需要主题替换，所以hover的颜色我们设置为主色
const store = useStore()
const linkHoverColor = ref(store.getters.cssVar.menuBg)
</script>

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
  .redirect {
    color: #666;
    font-weight: 600;
  }
  .redirect:hover {
    color: v-bind(linkHoverColor);
  }
}
</style>
