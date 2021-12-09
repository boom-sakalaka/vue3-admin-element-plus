/*
 * @Author: GZH
 * @Date: 2021-11-13 18:51:40
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-09 23:13:16
 * @FilePath: \vue3-admin\src\store\index.js
 * @Description:
 */
import { createStore } from 'vuex'
import user from './modules/user'
import app from './modules/app'
import getters from './getters'

export default createStore({
  getters,
  modules: {
    user,
    app
  }
})
