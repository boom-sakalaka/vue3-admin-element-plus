<!--
 * @Author: GZH
 * @Date: 2021-12-07 20:50:59
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-04 22:14:59
 * @FilePath: \vue3-admin-element-plus\src\views\profile\index.vue
 * @Description:
-->
<template>
  <div>
    <div class="my-container">
      <el-row>
        <el-col :span="6">
          <project-card class="project-card"></project-card>
        </el-col>
        <el-col :span="18" class="">
          <el-card>
            <el-tabs v-model="activeName">
              <el-tab-pane :label="$t('msg.profile.feature')" name="feature">
                <feature />
              </el-tab-pane>
              <el-tab-pane :label="$t('msg.profile.chapter')" name="chapter">
                <chapter />
              </el-tab-pane>
              <el-tab-pane :label="$t('msg.profile.author')" name="author">
                <author />
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProjectCard from './components/ProjectCard.vue'
import Feature from './components/Feature.vue'
import Chapter from './components/Chapter.vue'
import Author from './components/Author.vue'

const activeName = ref('feature')
</script>

<style lang="scss" scoped>
.project-card {
  margin-right: 20px;
}
</style>
