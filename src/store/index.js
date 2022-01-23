/*
 * @Author: GZH
 * @Date: 2021-11-13 18:51:40
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-23 18:47:31
 * @FilePath: \vue3-admin-element-plus\src\store\index.js
 * @Description:
 */
import { createStore } from 'vuex'
import user from './modules/user'
import app from './modules/app'
import theme from './modules/theme'
import permission from './modules/permission'
import getters from './getters'

export default createStore({
  getters,
  modules: {
    user,
    app,
    theme,
    permission
  }
})
