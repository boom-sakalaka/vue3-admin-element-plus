/*
 * @Author: GZH
 * @Date: 2022-01-24 10:46:10
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-24 10:58:11
 * @FilePath: \vue3-admin-element-plus\src\views\article-ranking\dynamic\index.js
 * @Description:
 */
import DynamicData from './DynamicData'
import { ref, watch } from 'vue'
import { watchSwitchLang } from '@/utils/i18n'
/**
 * 1. 动态的列数据
 * 2. 被勾选的动态列数据
 * 3. table 的 列数据
 */

// 暴露出动态的列数据
export const dynamicData = ref(DynamicData())
watchSwitchLang(() => {
  dynamicData.value = DynamicData()
  initSelectDynamicLable()
})
// 创建 被勾选的动态列数据
export const selectDynamicLable = ref([])
// 默认数据是全部勾选的
const initSelectDynamicLable = () => {
  selectDynamicLable.value = dynamicData.value.map((item) => item.label)
}

initSelectDynamicLable()

// 声明table 的列数据
export const tableColumns = ref([])

watch(
  selectDynamicLable,
  (val) => {
    tableColumns.value = []

    // 遍历列数据，从中判断出 当前列是否是被调用
    const selectData = dynamicData.value.filter((item) => {
      return val.includes(item.label)
    })

    tableColumns.value.push(...selectData)
  },
  {
    immediate: true
  }
)
