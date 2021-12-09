/*
 * @Author: GZH
 * @Date: 2021-12-09 23:11:06
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-09 23:28:44
 * @FilePath: \vue3-admin\src\store\modules\app.js
 * @Description:
 */
export default {
  namespaced: true,
  state: () => ({
    sidebarOpened: true
  }),
  mutations: {
    triggersidebarOpened(state) {
      state.sidebarOpened = !state.sidebarOpened
    }
  }
}
