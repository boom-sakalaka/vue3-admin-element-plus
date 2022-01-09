<!--
 * @Author: GZH
 * @Date: 2022-01-09 13:41:51
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-09 14:42:00
 * @FilePath: \vue3-admin-element-plus\src\views\user-manage\components\Export2Excel.vue
 * @Description:
-->
<template>
  <el-dialog :title="$t('msg.excel.title')" :model-value="modelValue" @close="closed" width="30%">
    <el-input v-model="excelName" :placeholder="$t('msg.excel.placeholder')"></el-input>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="closed">{{ $t('msg.excel.close') }}</el-button>
        <el-button type="primary" @click="onConfirm" :loading="loading">{{
          $t('msg.excel.confirm')
        }}</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { watchSwitchLang } from '@/utils/i18n'
import { getUserManageAllList } from '@/api/user-manage'
import { USER_RELATIONS } from './Export2ExcelConstants'
import { dateFilter } from '@/filter'

defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const emits = defineEmits(['update:modelValue'])

const i18n = useI18n()
let excelDefaultName = i18n.t('msg.excel.defaultName')
const excelName = ref('')
excelName.value = excelDefaultName
watchSwitchLang(() => {
  excelDefaultName = ref(i18n.t('msg.excel.defaultName'))
  excelName.value = excelDefaultName
})

/* 关闭事件 */
const closed = () => {
  emits('update:modelValue', false)
}

/* 确定按钮 */
const loading = ref(false)
const onConfirm = async () => {
  const allUser = (await getUserManageAllList()).list
  // 导入工具包
  const excel = await import('@/utils/Export2Excel')

  const data = formatJson(USER_RELATIONS, allUser)
  excel.export_json_to_excel({
    // excel 表头
    header: Object.keys(USER_RELATIONS),
    // excel 数据
    data,
    // 文件名称
    filename: excelName.value || excelDefaultName
  })

  closed()
}

const formatJson = (headers, rows) => {
  return rows.map((item) => {
    return Object.keys(headers).map((key) => {
      if (headers[key] === 'role') {
        const roles = item[headers[key]]
        return JSON.stringify(roles.map((role) => role.title))
      }
      if (headers[key] === 'openTime') {
        return dateFilter(item[headers[key]])
      }
      return item[headers[key]]
    })
  })
}
</script>
<style lang="scss" scoped></style>
