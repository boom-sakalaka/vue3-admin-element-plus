<!--
 * @Author: GZH
 * @Date: 2022-01-02 16:36:56
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-08 22:25:43
 * @FilePath: \vue3-admin-element-plus\src\views\import\index.vue
 * @Description:
-->
<template>
  <div class="">
    <upload-excel :onSuccess="onSuccess" />
  </div>
</template>

<script setup>
import {} from 'vue'
import { USER_RELATIONS, formatDate } from './utils'
import UploadExcel from '@/components/UploadExcel'
import { userManageImport } from '@/api/user-manage'
import { ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const i18n = useI18n()
const router = useRouter()
const onSuccess = async ({ header, result }) => {
  const updateData = generateData(result)
  console.warn(updateData)
  await userManageImport(updateData)
  ElMessage.success(result.length + i18n.t('msg.excel.importSuccess'))
  router.push('/user/manage')
}

/* 筛选数据 */
const generateData = (result) => {
  const arr = []
  result.forEach((item) => {
    const userInfo = {}

    Object.keys(item).forEach((key) => {
      if (USER_RELATIONS[key] === 'openTime') {
        userInfo[USER_RELATIONS[key]] = formatDate(item[key])
        return
      }
      userInfo[USER_RELATIONS[key]] = item[key]
    })

    arr.push(userInfo)
  })

  return arr
}
</script>

<style lang="scss" scoped></style>
