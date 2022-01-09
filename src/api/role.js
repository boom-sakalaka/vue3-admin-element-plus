/*
 * @Author: GZH
 * @Date: 2022-01-09 19:40:25
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-09 19:41:30
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
