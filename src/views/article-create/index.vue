<!--
 * @Author: GZH
 * @Date: 2022-01-01 11:38:15
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-26 11:45:05
 * @FilePath: \vue3-admin-element-plus\src\views\article-create\index.vue
 * @Description:
-->
<template>
  <div class="article-create">
    <el-card>
      <el-input
        class="title-input"
        :placeholder="$t('msg.article.titlePlaceholder')"
        v-model="title"
        maxlength="20"
        clearable
      />

      <el-tabs v-model="activeName">
        <el-tab-pane :label="$t('msg.article.markdown')" name="markdown">
          <markdown :title="title" :detail="detail" @onSuccess="onSuccess" />
        </el-tab-pane>
        <el-tab-pane :label="$t('msg.article.richText')" name="editor">
          <eidtor :title="title" :detail="detail" @onSuccess="onSuccess" />
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Eidtor from './components/Editot.vue'
import Markdown from './components/Markdown.vue'
import { articleDetail } from '@/api/article'
import { useRoute } from 'vue-router'

const title = ref('')
const activeName = ref('markdown')

const onSuccess = () => {
  title.value = ''
}

/* 处理编辑相关 */
const route = useRoute()
const articleId = route.params.id
const detail = ref({})
const getArticleDetail = async () => {
  detail.value = await articleDetail(articleId)
  // 标题
  title.value = detail.value.title
}

if (articleId) {
  getArticleDetail()
}
</script>

<style lang="scss" scoped>
.title-input {
  margin-bottom: 20px;
}
</style>
