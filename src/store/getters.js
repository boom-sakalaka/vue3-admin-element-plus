/*
 * @Author: GZH
 * @Date: 2021-11-14 20:10:50
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-17 22:21:05
 * @FilePath: \vue3-admin\src\store\getters.js
 * @Description: 快捷访问
 */
const getters = {
  token: (state) => state.user.token,
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  }
}
export default getters
