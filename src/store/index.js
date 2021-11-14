/*
 * @Author: GZH
 * @Date: 2021-11-13 18:51:40
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-14 17:17:49
 * @FilePath: \vue3-admin\src\store\index.js
 * @Description:
 */
import { createStore } from 'vuex'
import user from './modules/user'

export default createStore({
  modules: {
    user
  }
})
