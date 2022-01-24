/*
 * @Author: GZH
 * @Date: 2022-01-24 12:06:37
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-24 16:24:24
 * @FilePath: \vue3-admin-element-plus\src\views\article-ranking\sortable\index.js
 * @Description:
 */
import { ref } from 'vue'
import Sortable from 'sortablejs'
import { articleSort } from '@/api/article'
import { ElMessage } from 'element-plus'
import i18n from '@/i18n'

// 排序相关
export const tableRef = ref(null)

/**
 * 初始化排序
 */
export const initSortable = (tableData, cb) => {
  const el = tableRef.value.$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0]

  // 1.要拖拽的元素
  // 2. 配置对象
  Sortable.create(el, {
    // 拖拽时的类名
    ghostClass: 'sortable-ghost',
    // 拖拽介绍的回调方法
    async onEnd(event) {
      const { newIndex, oldIndex } = event

      await articleSort({
        initRanking: tableData.value[oldIndex].ranking,
        finalRanking: tableData.value[newIndex].ranking
      })
      ElMessage.success(i18n.global.t('msg.article.sortSuccess'))
      tableData.value = []
      cb && cb()
    }
  })
}
