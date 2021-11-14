/*
 * @Author: GZH
 * @Date: 2021-11-14 17:02:51
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-14 17:05:40
 * @FilePath: \vue3-admin\src\utils\request.js
 * @Description: 封装axios
 */

import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 50000
})

export default service
