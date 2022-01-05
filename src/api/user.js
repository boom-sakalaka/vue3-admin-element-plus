/*
 * @Author: GZH
 * @Date: 2022-01-05 19:43:08
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-05 20:36:19
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

/* 获取章节信息 */
export const chapter = () => {
  return request({
    url: '/user/chapter'
  })
}
