/*
 * @Author: GZH
 * @Date: 2021-11-14 17:11:01
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-14 17:45:45
 * @FilePath: \vue3-admin\src\store\modules\user.js
 * @Description: user 登录 模块数据
 */

import { login } from '@/api/sys'
import md5 from 'md5'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN } from '@/constant'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    }
  },
  actions: {
    login(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then((data) => {
            context.commit('setToken', data.data.data.token)
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
}
