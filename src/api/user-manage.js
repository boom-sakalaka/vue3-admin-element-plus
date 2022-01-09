/*
 * @Author: GZH
 * @Date: 2022-01-08 17:28:37
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-09 14:05:21
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
