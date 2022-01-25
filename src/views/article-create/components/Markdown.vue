<!--
 * @Author: GZH
 * @Date: 2022-01-24 19:19:23
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-25 20:47:52
 * @FilePath: \vue3-admin-element-plus\src\views\article-create\components\Markdown.vue
 * @Description:
-->
<template>
  <div class="markdown-container">
    <!-- 渲染区 -->
    <div id="markdown-box"></div>
    <div class="bottom">
      <el-button type="primary" @click="onSubmitClick">{{ $t('msg.article.commit') }}</el-button>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import MKEditor from '@toast-ui/editor'
import '@toast-ui/editor/dist/toastui-editor.css'
import '@toast-ui/editor/dist/i18n/zh-cn'
import { useStore } from 'vuex'
import { watchSwitchLang } from '@/utils/i18n'

/* Editor 实例 */
const store = useStore()
let mkEditor
let el

onMounted(() => {
  el = document.querySelector('#markdown-box')
  initEditor()
})
const initEditor = () => {
  mkEditor = new MKEditor({
    el,
    height: '500px',
    previewStyle: 'vertical',
    language: store.getters.language === 'zh' ? 'zh-CN' : 'en'
  })

  mkEditor.getMarkdown()
}

watchSwitchLang(() => {
  if (!el) return
  // 保留用户输入的内容
  const htmlStr = mkEditor.getHTML()
  mkEditor.destroy()
  initEditor()
  mkEditor.setHTML(htmlStr)
})
</script>
<style lang="scss" scoped>
.markdown-container {
  .bottom {
    margin-top: 20px;
    text-align: right;
  }
}
</style>
