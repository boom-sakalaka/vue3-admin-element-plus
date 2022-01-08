/*
 * @Author: GZH
 * @Date: 2022-01-08 17:28:37
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-08 22:14:33
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

/* excel上传 */
export const userManageImport = (data) => {
  return request({
    url: '/user-manage/batch/import',
    method: 'POST',
    data
  })
}
