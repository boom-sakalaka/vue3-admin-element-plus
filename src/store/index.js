/*
 * @Author: GZH
 * @Date: 2021-11-13 18:51:40
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-14 20:11:15
 * @FilePath: \vue3-admin\src\store\index.js
 * @Description:
 */
import { createStore } from 'vuex'
import user from './modules/user'
import getters from './getters'

export default createStore({
  getters,
  modules: {
    user
  }
})
