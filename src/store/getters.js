/*
 * @Author: GZH
 * @Date: 2021-11-14 20:10:50
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-19 21:20:05
 * @FilePath: \vue3-admin\src\store\getters.js
 * @Description: 快捷访问
 */

import { genenrateColor } from '@/utils/theme'
import { getItem } from '@/utils/storage'
import { MAIN_COLOR } from '@/constant'

// console.warn(genenrateColor(getItem(MAIN_COLOR)))
const getters = {
  token: (state) => state.user.token,
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  userInfo: (state) => state.user.userInfo,
  cssVar: (state) => ({
    ...state.theme.variables,
    ...genenrateColor(getItem(MAIN_COLOR))
  }),
  sidebarOpened: (state) => state.app.sidebarOpened,
  language: (state) => state.app.language,
  mainColor: (state) => state.theme.mainColor
}
export default getters
