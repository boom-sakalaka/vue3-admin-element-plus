<!--
 * @Author: GZH
 * @Date: 2022-01-02 16:36:56
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-23 19:22:12
 * @FilePath: \vue3-admin-element-plus\src\views\user-manage\index.vue
 * @Description:
-->
<template>
  <div class="user-manage-container">
    <el-card class="header">
      <div>
        <el-button type="primary" @click="onImportExcelClick" v-permission="['importUser']">{{
          $t('msg.excel.importExcel')
        }}</el-button>
        <el-button type="success" @click="onToExcelClick">{{
          $t('msg.excel.exportExcel')
        }}</el-button>
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
          <template #default="{ row }">
            <el-button type="primary" size="mini" @click="onShowClick(row._id)">{{
              $t('msg.excel.show')
            }}</el-button>
            <el-button
              type="info"
              size="mini"
              @click="onShowRoles(row)"
              v-permission="['distributeRole']"
              >{{ $t('msg.excel.showRole') }}</el-button
            >
            <el-button
              type="danger"
              size="mini"
              @click="onRemoveClick(row)"
              v-permission="['removeUser']"
              >{{ $t('msg.excel.remove') }}</el-button
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
    <export2-excel v-model="exportToExcelVisible" />
    <roles-dialog v-model="roleDialogVisible" :userId="selectUserId" @updateRole="getListData" />
  </div>
</template>

<script setup>
import { onActivated, ref, watch } from 'vue'
import Export2Excel from './components/Export2Excel.vue'
import RolesDialog from './components/roles'
import { getUserManageList, deleteUser } from '@/api/user-manage'
import { watchSwitchLang } from '@/utils/i18n'
import { useRouter } from 'vue-router'
import { ElMessageBox, ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'

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

/* 删除用户 */
const i18n = useI18n()
const onRemoveClick = (row) => {
  ElMessageBox.confirm(
    i18n.t('msg.excel.dialogTitle1') + row.username + i18n.t('msg.excel.dialogTitle2'),
    {
      type: 'warning'
    }
  ).then(async () => {
    await deleteUser(row._id)
    ElMessage.success(i18n.t('msg.excel.removeSuccess'))
    getListData()
  })
}

/* 查看用户详情 */
const onShowClick = (id) => {
  router.push(`/user/info/${id}`)
}

/* excle 导入跳转事件 */
const router = useRouter()
const onImportExcelClick = () => {
  router.push('/user/import')
}

onActivated(() => {
  getListData()
})

/* excel 导出相关 */
const exportToExcelVisible = ref(false)
const onToExcelClick = () => {
  exportToExcelVisible.value = true
}

// 选择角色
const roleDialogVisible = ref(false)
const selectUserId = ref('')
const onShowRoles = (row) => {
  roleDialogVisible.value = true
  selectUserId.value = row._id
}

watch(roleDialogVisible, (val) => {
  if (!val) selectUserId.value = ''
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
