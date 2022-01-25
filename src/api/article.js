/*
 * @Author: GZH
 * @Date: 2022-01-24 08:15:30
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-25 22:18:19
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

/* 修改排序 */
export const articleSort = (data) => {
  return request({
    url: '/article/sort',
    method: 'POST',
    data
  })
}

/* 删除文章 */
export const deleteArticle = (articleId) => {
  return request({
    url: `/article/delete/${articleId}`
  })
}

/* 查看文章详情 */
export const articleDetail = (articleId) => {
  return request({
    url: `/article/${articleId}`
  })
}

/* 创建文章 */
export const createArticle = (data) => {
  return request({
    url: '/article/create',
    method: 'POST',
    data
  })
}

// 编辑文章
export const editorArticle = (data) => {
  return request({
    url: '/article/edit',
    method: 'POST',
    data
  })
}
