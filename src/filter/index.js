/*
 * @Author: GZH
 * @Date: 2022-01-08 18:08:39
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-09 14:41:28
 * @FilePath: \vue3-admin-element-plus\src\filter\index.js
 * @Description:
 */

import dayjs from 'dayjs'

export const dateFilter = (val, format = 'YYYY-MM-DD') => {
  if (!isNaN(val)) {
    val = parseInt(val)
  }

  return dayjs(val).format(format)
}

export default (app) => {
  app.config.globalProperties.$filters = {
    dateFilter
  }
}
