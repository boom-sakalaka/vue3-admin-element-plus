<!--
 * @Author: GZH
 * @Date: 2022-01-24 19:19:09
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-26 11:46:34
 * @FilePath: \vue3-admin-element-plus\src\views\article-create\components\Editot.vue
 * @Description:
-->
<template>
  <div class="editor-container">
    <div id="editor-box"></div>
    <div class="bottom">
      <el-button type="primary" @click="onSubmitClick">{{ $t('msg.article.commit') }}</el-button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, defineProps, defineEmits, watch } from 'vue'
import E from 'wangeditor'
import i18next from 'i18next'
import { useStore } from 'vuex'
import { commitArticle, editArticle } from './commit'

const props = defineProps({
  title: {
    type: String,
    require: true
  },
  detail: {
    type: Object
  }
})
const emits = defineEmits(['onSuccess'])
// 初始化 Editor 实例
let editor
// 获取到 DOM
let el
const store = useStore()
const initEditor = () => {
  editor = new E(el)
  editor.config.zIndex = 1
  // 菜单栏提示
  editor.config.showMenuTooltips = true
  editor.config.menuTooltipPosition = 'down'
  // 国际化
  editor.config.lang = store.getters.language === 'zh' ? 'zh-CN' : 'en'
  editor.i18next = i18next
  editor.create()
}

onMounted(() => {
  el = document.getElementById('editor-box')
  initEditor()
})

const onSubmitClick = async () => {
  if (props.detail && props.detail._id) {
    await editArticle({
      id: props.detail._id,
      title: props.title,
      content: editor.txt.html()
    })
  } else {
    await commitArticle({
      title: props.title,
      content: editor.txt.html()
    })
  }

  editor.txt.html('')

  emits('onSuccess')
}

// 编辑相关
watch(
  () => props.detail,
  (val) => {
    if (val && val.content) {
      editor.txt.html(val.content)
    }
  },
  {
    immediate: true
  }
)
</script>
<style lang="scss" scoped>
.editor-container {
  .bottom {
    margin-top: 20px;
    text-align: right;
  }
}
</style>
