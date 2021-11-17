/*
 * @Author: GZH
 * @Date: 2021-11-14 17:02:51
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-17 22:12:14
 * @FilePath: \vue3-admin\src\utils\request.js
 * @Description: 封装axios
 */

import axios from 'axios'
import { ElMessage } from 'element-plus'
import store from '@/store'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 50000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在这里统一注入token
    if (store.getters.token) {
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
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
    ElMessage.error(err.message)
    return Promise.reject(err)
  }
)

export default service
