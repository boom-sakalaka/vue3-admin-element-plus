/*
 * @Author: GZH
 * @Date: 2021-11-14 17:11:01
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-23 19:09:27
 * @FilePath: \vue3-admin-element-plus\src\store\modules\user.js
 * @Description: user 登录 模块数据
 */

import { login, getUserInfo } from '@/api/sys'
import md5 from 'md5'
import { setItem, getItem, removeAllItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import router, { resetRouter } from '@/router'
import { setTimeStamp } from '@/utils/auth'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
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
            context.commit('setToken', data.token)
            router.push('/')

            // 保存登录时间
            setTimeStamp()

            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    async getUserInfo(context) {
      const res = await getUserInfo()

      context.commit('setUserInfo', res)
      return res
    },
    // 退出登录
    logout() {
      // 用户退出删除所有私有路由
      resetRouter()

      this.commit('user/setToken', '')
      this.commit('user/setUserInfo', {})
      this.commit('app/setTagsViewList', [])
      removeAllItem()

      // todo 清理权限相关的数据
      router.push('/login')
    }
  }
}
