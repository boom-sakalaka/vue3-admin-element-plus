/*
 * @Author: GZH
 * @Date: 2021-11-14 17:08:06
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-17 22:08:24
 * @FilePath: \vue3-admin\src\api\sys.js
 * @Description:
 */

import request from '@/utils/request'

/* 登录请求 */
export const login = (data) => {
  return request({
    url: 'sys/login',
    method: 'POST',
    data
  })
}

/* 获取用户信息 */
export const getUserInfo = () => {
  return request({
    url: 'sys/profile',
    method: 'GET'
  })
}
