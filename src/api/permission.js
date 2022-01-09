/*
 * @Author: GZH
 * @Date: 2022-01-09 19:50:12
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-09 19:50:13
 * @FilePath: \vue3-admin-element-plus\src\api\premission.js
 * @Description:
 */
import request from '@/utils/request'

/* 获取所有的权限
 */
export const permissionList = () => {
  return request({
    url: '/permission/list'
  })
}
