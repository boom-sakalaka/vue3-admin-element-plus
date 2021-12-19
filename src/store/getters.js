/*
 * @Author: GZH
 * @Date: 2021-11-14 20:10:50
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-19 17:19:15
 * @FilePath: \vue3-admin\src\store\getters.js
 * @Description: 快捷访问
 */

import variables from '@/styles/variables.scss'

const getters = {
  token: (state) => state.user.token,
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  userInfo: (state) => state.user.userInfo,
  cssVar: (state) => variables,
  sidebarOpened: (state) => state.app.sidebarOpened,
  language: (state) => state.app.language,
  mainColor: (state) => state.theme.mainColor
}
export default getters
