/*
 * @Author: GZH
 * @Date: 2022-01-24 08:15:30
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-24 08:16:35
 * @FilePath: \vue3-admin-element-plus\src\api\article.js
 * @Description:
 */
import request from '@/utils/request'

/* 获取所有 文章 */
export const getArticleList = (data) => {
  return request({
    url: '/article/list',
    params: data
  })
}
