<!--
 * @Author: GZH
 * @Date: 2021-11-13 18:51:39
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-19 19:21:23
 * @FilePath: \vue3-admin\src\App.vue
 * @Description:
-->
<!-- <template><router-view /></template>
<script>
export default { name: 'App' }
</script>
<style></style> -->

<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script setup>
import { ElConfigProvider } from 'element-plus'

import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { generateNewStyle, writeNewStyle } from '@/utils/theme'

const store = useStore()

// 处理主题色
generateNewStyle(store.getters.mainColor).then((newStyleText) => {
  writeNewStyle(newStyleText)
})

const locale = computed(() => (store.getters.language === 'en' ? en : zhCn))
</script>
