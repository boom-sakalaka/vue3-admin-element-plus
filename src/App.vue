<!--
 * @Author: GZH
 * @Date: 2021-11-13 18:51:39
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-15 21:26:26
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

const store = useStore()

const locale = computed(() => (store.getters.language === 'en' ? en : zhCn))
</script>
