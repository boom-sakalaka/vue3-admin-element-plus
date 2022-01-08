<!--
 * @Author: GZH
 * @Date: 2022-01-02 16:36:56
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-08 22:27:28
 * @FilePath: \vue3-admin-element-plus\src\views\user-manage\index.vue
 * @Description:
-->
<template>
  <div class="user-manage-container">
    <el-card class="header">
      <div>
        <el-button type="primary" @click="onImportExcelClick">{{
          $t('msg.excel.importExcel')
        }}</el-button>
        <el-button type="success">{{ $t('msg.excel.exportExcel') }}</el-button>
      </div>
    </el-card>
    <!-- table -->
    <el-card>
      <el-table :data="tabData" border style="width: 100%">
        <!-- 索引 -->
        <el-table-column label="#" type="index"></el-table-column>
        <!-- 姓名 -->
        <el-table-column prop="username" :label="$t('msg.excel.name')"></el-table-column>
        <!-- 手机号 -->
        <el-table-column prop="mobile" :label="$t('msg.excel.mobile')"></el-table-column>
        <!-- 头像 -->
        <el-table-column align="center" :label="$t('msg.excel.avatar')">
          <template v-slot="{ row }">
            <el-image class="avatar" :src="row.avatar" :preview-src-list="[row.avatar]"> </el-image>
          </template>
        </el-table-column>
        <!-- 角色 -->
        <el-table-column :label="$t('msg.excel.role')">
          <template #default="{ row }">
            <div v-if="row.role && row.role.length > 0">
              <el-tag v-for="item in row.role" :key="item.id" size="mini">
                {{ item.title }}
              </el-tag>
            </div>
            <div v-else>
              <el-tag size="mini">{{ $t('msg.excel.defaultRole') }}</el-tag>
            </div>
          </template>
        </el-table-column>
        <!-- 时间 -->
        <el-table-column :label="$t('msg.excel.openTime')">
          <template #default="{ row }">
            {{ $filters.dateFilter(row.openTime) }}
          </template>
        </el-table-column>
        <!-- 操作 -->
        <el-table-column :label="$t('msg.excel.action')" fixed="right" width="300">
          <template #default>
            <el-button type="primary" size="mini">{{ $t('msg.excel.show') }}</el-button>
            <el-button type="info" size="mini">{{ $t('msg.excel.showRole') }}</el-button>
            <el-button type="danger" size="mini">{{ $t('msg.excel.remove') }}</el-button>
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
import { onActivated, ref } from 'vue'
import { getUserManageList } from '@/api/user-manage'
import { watchSwitchLang } from '@/utils/i18n'
import { useRouter } from 'vue-router'

// 数据相关
const tabData = ref([])
const total = ref(0)
const page = ref(1)
const size = ref(2)

/* 获取数据的方法 */
const getListData = async () => {
  const result = await getUserManageList({
    page: page.value,
    size: size.value
  })
  tabData.value = result.list
  total.value = result.total
}

getListData()

watchSwitchLang(getListData())

const handleSizeChange = (currentSize) => {
  size.value = currentSize
  getListData()
}
const handleCurrentChange = (currentPage) => {
  page.value = currentPage
  getListData()
}

/* excle 导入跳转事件 */
const router = useRouter()
const onImportExcelClick = () => {
  router.push('/user/import')
}

onActivated(() => {
  getListData()
})
</script>

<style lang="scss" scoped>
.user-manage-container {
  .header {
    margin-bottom: 22px;
    text-align: right;
  }
  :deep(.avatar) {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  :deep(.el-tag) {
    margin-right: 6px;
  }

  .pagination {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
