/*
 * @Author: GZH
 * @Date: 2022-01-09 19:40:25
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-23 17:09:23
 * @FilePath: \vue3-admin-element-plus\src\api\role.js
 * @Description:
 */
import request from '@/utils/request'

/* 获取所有的角色 */
export const roleList = () => {
  return request({
    url: '/role/list'
  })
}

/* 获取当前角色对应的权限 */
export const rolePermission = (roleId) => {
  return request({
    url: `/role/permission/${roleId}`
  })
}

/* 给角色修改权限 */
export const distributePermission = (data) => {
  return request({
    url: '/role/distribute-permission',
    method: 'POST',
    data
  })
}
