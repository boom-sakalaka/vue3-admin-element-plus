/*
 * @Author: GZH
 * @Date: 2021-11-14 17:02:51
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-05 20:23:47
 * @FilePath: \vue3-admin-element-plus\src\utils\request.js
 * @Description: 封装axios
 */

import axios from 'axios'
import { ElMessage } from 'element-plus'
import store from '@/store'
import { isCheckTimeout } from '@/utils/auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 50000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在这里统一注入token
    if (store.getters.token) {
      // 主动验证 token时间是否过期
      if (isCheckTimeout()) {
        // 退出操作
        store.dispatch('user/logout')
        return Promise.reject(new Error('token 失效'))
      }
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    config.headers['Accept-Language'] = store.getters.language
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data
    // 需要判断当前请求是否成功
    if (success) {
      // 成功后返回解析后的数据
      return data
    } else {
      // 失败(请求成功，业务失败)
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  (err) => {
    // token 过期
    if (err?.response?.data?.code === 401) {
      store.dispatch('user/logout')
    }
    ElMessage.error(err.message)
    return Promise.reject(err)
  }
)

export default service
