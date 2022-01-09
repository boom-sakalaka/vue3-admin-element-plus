/*
 * @Author: GZH
 * @Date: 2022-01-08 17:28:37
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-09 20:53:24
 * @FilePath: \vue3-admin-element-plus\src\api\user-manage.js
 * @Description:
 */
import request from '@/utils/request'

/* 获取用户列表的数据 */
export const getUserManageList = (data) => {
  return request({
    url: '/user-manage/list',
    params: data
  })
}

/* 获取所有用户列表数据 */
export const getUserManageAllList = () => {
  return request({
    url: '/user-manage/all-list'
  })
}

/* 获取用户详情 */
export const userDetail = (id) => {
  return request({
    url: `/user-manage/detail/${id}`
  })
}

/* excel上传 */
export const userManageImport = (data) => {
  return request({
    url: '/user-manage/batch/import',
    method: 'POST',
    data
  })
}

/* 删除指定数据 */
export const deleteUser = (id) => {
  return request({
    url: `/user-manage/detele/${id}`
  })
}

// 获取指定用户的角色
export const userRoles = (id) => {
  return request({
    url: `/user-manage/role/${id}`
  })
}

// 为用户分配角色
export const updateRole = (id, roles) => {
  return request({
    url: `/user-manage/update-role/${id}`,
    method: 'POST',
    data: {
      roles
    }
  })
}
