/*
 * @Author: GZH
 * @Date: 2022-01-09 15:48:48
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-23 19:27:09
 * @FilePath: \vue3-admin-element-plus\src\directives\index.js
 * @Description:
 */
import print from 'vue3-print-nb'
import permission from './permission'

export default (app) => {
  app.use(print)
  app.directive('permission', permission)
}
