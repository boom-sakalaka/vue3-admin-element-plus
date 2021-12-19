/*
 * @Author: GZH
 * @Date: 2021-11-13 18:51:40
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-19 17:14:14
 * @FilePath: \vue3-admin\src\store\index.js
 * @Description:
 */
import { createStore } from 'vuex'
import user from './modules/user'
import app from './modules/app'
import theme from './modules/theme'
import getters from './getters'

export default createStore({
  getters,
  modules: {
    user,
    app,
    theme
  }
})
