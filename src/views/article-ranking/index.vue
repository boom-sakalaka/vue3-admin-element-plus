<!--
 * @Author: GZH
 * @Date: 2022-01-01 11:38:15
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-24 11:17:32
 * @FilePath: \vue3-admin-element-plus\src\views\article-ranking\index.vue
 * @Description:
-->
<template>
  <div class="article-ranking-container">
    <el-card class="header">
      <div class="dynamic-box">
        <span class="title">{{ $t('msg.article.dynamicTitle') }}</span>
        <el-checkbox-group v-model="selectDynamicLable">
          <el-checkbox v-for="(item, index) in dynamicData" :label="item.label" :key="index">{{
            item.label
          }}</el-checkbox>
        </el-checkbox-group>
      </div>
    </el-card>

    <el-card>
      <el-table ref="tableRef" :data="tableData" border style="width: 100%">
        <!-- <el-table-column :label="$t('msg.article.ranking')" prop="ranking"></el-table-column>
        <el-table-column :label="$t('msg.article.title')" prop="title"></el-table-column>

        <el-table-column :label="$t('msg.article.author')" prop="author"></el-table-column>
        <el-table-column :label="$t('msg.article.publicDate')">
          <template #default="{ row }">
            {{ $filters.relativeTime(row.publicDate) }}
          </template>
        </el-table-column>
        <el-table-column :label="$t('msg.article.desc')" prop="desc"></el-table-column>
        <el-table-column :label="$t('msg.article.action')">
          <template #default="{ row }">
            <el-button type="primary" size="mini" @click="onShowClick(row)">
              {{ $t('msg.article.show') }}
            </el-button>
            <el-button type="danger" size="mini" @click="onRemoveClick(row)">
              {{ $t('msg.article.remove') }}</el-button
            >
          </template>
        </el-table-column> -->

        <el-table-column
          v-for="(item, index) in tableColumns"
          :key="index"
          :prop="item.prop"
          :label="item.label"
        >
          <template v-if="item.prop === 'publicDate'" #default="{ row }">
            {{ $filters.relativeTime(row.publicDate) }}
          </template>

          <template v-else-if="item.prop === 'action'" #default="{ row }">
            <el-button type="primary" size="mini" @click="onShowClick(row)">
              {{ $t('msg.article.show') }}
            </el-button>
            <el-button type="danger" size="mini" @click="onRemoveClick(row)">
              {{ $t('msg.article.remove') }}</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="pagination"
        @size-change="handleSizeChange"
        :total="total"
        :current-page="page"
        :page-size="size"
        :page-sizes="[2, 5, 10, 20]"
        @current-change="handleCurrentChange"
        layout="total, sizes, pager, prev, next, jumper"
      ></el-pagination>
    </el-card>
  </div>
</template>

<script setup>
/* eslint-disable vue/valid-v-slot */
import { ref, onActivated } from 'vue'
import { getArticleList } from '@/api/article'
import { watchSwitchLang } from '@/utils/i18n'
import { dynamicData, selectDynamicLable, tableColumns } from './dynamic/index'

// 数据相关
const tableData = ref([])
const page = ref(1)
const size = ref(10)
const total = ref(0)

const getListData = async () => {
  const result = await getArticleList({
    page: page.value,
    size: size.value
  })

  tableData.value = result.list
  total.value = result.total
}
getListData()

watchSwitchLang(getListData)
onActivated(getListData)

// 分页器页数变化
const handleSizeChange = (currentSize) => {
  size.value = currentSize
  getListData()
}
// 分页器 页码变化
const handleCurrentChange = (currentPage) => {
  page.value = currentPage
  getListData()
}

// 点击查看
const onShowClick = () => {}
// 点击删除
const onRemoveClick = () => {}
</script>

<style lang="scss" scoped>
.article-ranking-container {
  .header {
    margin-bottom: 20px;
    .dynamic-box {
      display: flex;
      align-items: center;
    }
    .title {
      margin-right: 20px;
      font-size: 14px;
      font-weight: bold;
    }
  }

  :deep(.el-table__row) {
    cursor: pointer;
  }

  .pagination {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
