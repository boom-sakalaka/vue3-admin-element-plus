<!--
 * @Author: GZH
 * @Date: 2022-01-08 18:48:50
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-08 22:06:15
 * @FilePath: \vue3-admin-element-plus\src\components\UploadExcel\index.vue
 * @Description: 导入组件
-->
<template>
  <div class="upload-excel">
    <div class="btn-upload">
      <el-button type="primary" :loading="loading" @click="handleUpload">
        {{ $t('msg.uploadExcel.upload') }}
      </el-button>
    </div>
    <input
      type="file"
      ref="excelUploadInput"
      class="excel-upload-input"
      accept=".xlsx, .xls"
      @change="handleChange"
    />
    <div
      class="drop"
      @drop.stop.prevent="handleDrop"
      @dragover.stop.prevent="handleDragOver"
      @dragenter.stop.prevent="handleDragOver"
    >
      <i class="el-icon-upload"></i>
      <span>{{ $t('msg.uploadExcel.drop') }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import XLSX from 'xlsx'
import { getHeaderRow, isExcel } from './utils'
import { ElMessage } from 'element-plus'

const props = defineProps({
  // 上传之前的回调
  beforeUpload: Function,
  // 上传成功的回调
  onSuccess: Function
})

// 点击上传触发
const loading = ref(false)
const excelUploadInput = ref(null)

const handleUpload = () => {
  excelUploadInput.value.click()
}
const handleChange = (e) => {
  const files = e.target.files
  const rawFile = files[0]
  if (!rawFile) return
  upload(rawFile)
}

// 触发上传事件
const upload = (rawFile) => {
  excelUploadInput.value.value = null
  // 如果用户没有指定上传前的回调
  if (!props.beforeUpload) {
    readerData(rawFile)
    return
  }
  // 如果用户指定了 上传前的回调，需要判断这个回调返回的boolean 来判断是否继续下去
  const before = props.beforeUpload(rawFile)
  if (before) {
    readerData(rawFile)
  }
}

/* 读取数据(异步
) */
const readerData = (rawFile) => {
  loading.value = true
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-new
    const reader = new FileReader()

    // 读取操作完成时触发
    reader.onload = (e) => {
      // 1. 获取到解析后的解析数据
      const data = e.target.result
      // 2. 利用XLSX 对数据进行解析
      const workbook = XLSX.read(data, { type: 'array' })
      // 3. 获取第一张表格（工作簿）名称
      const firstSheetName = workbook.SheetNames[0]
      // 4. 读取 sheet1 （第一张）的数据
      const workSheet = workbook.Sheets[firstSheetName]
      // 5. 解析数据的表头
      const header = getHeaderRow(workSheet)
      // 6. 解析数据的数据体
      const result = XLSX.utils.sheet_to_json(workSheet)
      // 7. 传入解析后的数据
      generateData({ header, result })
      // 8. 处理loading
      loading.value = false
      // 9. 成功回调
      resolve()
    }

    reader.readAsArrayBuffer(rawFile)
  })
}

// 根据导入内容， 生成数据
const generateData = (excelData) => {
  props.onSuccess && props.onSuccess(excelData)
}

// 拖拽上传

// 释放后触发
const handleDrop = (e) => {
  // 上传中
  if (loading.value) return

  const files = e.dataTransfer.files
  if (files.length !== 1) {
    ElMessage.error('必须要有一个文件')
    return
  }

  const rawFile = files[0]
  if (!isExcel(rawFile)) {
    ElMessage.error('文件必须是 .xlsx,.xls,csv 格式')
    return
  }

  upload(rawFile)
}

const handleDragOver = (e) => {
  e.dataTransfer.dropEffect = 'copy'
}
</script>
<style lang="scss" scoped>
.upload-excel {
  display: flex;
  justify-content: center;
  margin-top: 100px;
  .excel-upload-input {
    display: none;
    z-index: -9999;
  }
  .btn-upload,
  .drop {
    border: 1px solid #bbb;
    width: 350px;
    height: 160px;
    text-align: center;
    line-height: 160px;
  }
  .drop {
    line-height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #bbb;
  }
  i {
    font-size: 60px;
    display: block;
  }
}
</style>
