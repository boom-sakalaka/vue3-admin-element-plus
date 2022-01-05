/*
 * @Author: GZH
 * @Date: 2022-01-05 19:43:08
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-05 19:44:11
 * @FilePath: \vue3-admin-element-plus\src\api\user.js
 * @Description:
 */
import request from '@/utils/request'

/* 获取项目功能 */
export const feature = () => {
  return request({
    url: '/user/feature'
  })
}
