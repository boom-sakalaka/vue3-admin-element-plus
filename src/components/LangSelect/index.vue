<!--
 * @Author: GZH
 * @Date: 2021-12-15 20:20:18
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-26 21:03:40
 * @FilePath: \vue3-admin\src\components\LangSelect\index.vue
 * @Description: 切换语言
-->
<template>
  <el-dropdown class="international" trigger="click" @command="handleSetLanguage">
    <el-tooltip content="国际化" placement="bottom">
      <span id="guide-lang"><svg-icon icon="language" /></span>
    </el-tooltip>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="language === 'zh'" command="zh"> 中文 </el-dropdown-item>
        <el-dropdown-item :disabled="language === 'en'" command="en"> English </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'

defineProps({
  effect: {
    type: String,
    default: 'dark',
    validator: function (value) {
      return ['dark', 'light'].indexOf(value) !== -1
    }
  }
})

const store = useStore()
const language = computed(() => store.getters.language)

// 切换语言的方法
const i18n = useI18n()
const handleSetLanguage = (lang) => {
  // 切换i18n 的语言方法
  i18n.locale.value = lang
  // 修改vuex里面的language
  store.commit('app/setLanguage', lang)
  // 提示
  ElMessage.success(i18n.t('msg.toast.switchLangSuccess'))
}
</script>
<style lang="scss" scoped></style>
