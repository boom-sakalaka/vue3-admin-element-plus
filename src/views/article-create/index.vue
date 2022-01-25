<!--
 * @Author: GZH
 * @Date: 2022-01-01 11:38:15
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-24 19:27:02
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
          <markdown />
        </el-tab-pane>
        <el-tab-pane :label="$t('msg.article.richText')" name="editor">
          <eidtor />
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Eidtor from './components/Editot.vue'
import Markdown from './components/Markdown.vue'

const title = ref('')
const activeName = ref('markdown')
</script>

<style lang="scss" scoped>
.title-input {
  margin-bottom: 20px;
}
</style>
