<!--
 * @Author: GZH
 * @Date: 2021-11-15 20:34:59
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-26 20:21:15
 * @FilePath: \vue3-admin\src\layout\components\AppMain.vue
 * @Description:
-->
<template>
  <div class="app-main">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="route.path"></component>
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { isTags } from '../../utils/tag'
import { useStore } from 'vuex'
import { generateTitle, watchSwitchLang } from '../../utils/i18n'

/**
 * 生成title
 */
const getTitle = (route) => {
  let title = ''

  if (!route.meta) {
    const pathArr = route.path.split('/')
    title = pathArr[pathArr.length - 1]
  } else {
    title = generateTitle(route.meta.title)
  }

  return title
}

const store = useStore()
const route = useRoute()
watch(
  route,
  (to, from) => {
    // 并不是所有的路由都需要保存
    if (!isTags(to.path)) return
    const { fullPath, meta, name, params, path, query } = to
    store.commit('app/addTagsViewList', {
      fullPath,
      meta,
      name,
      params,
      path,
      query,
      title: getTitle(to)
    })
  },
  {
    immediate: true
  }
)

watchSwitchLang(() => {
  store.getters.tagsViewList.forEach((route, index) => {
    store.commit('app/changeTagView', {
      index,
      tag: {
        ...route,
        title: getTitle(route)
      }
    })
  })
})
</script>
<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 50px - 43px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 104px 20px 20px 20px;
  box-sizing: border-box;
}
</style>
