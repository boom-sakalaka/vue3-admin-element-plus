/*
 * @Author: GZH
 * @Date: 2022-01-23 17:46:04
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-23 18:00:34
 * @FilePath: \vue3-admin-element-plus\src\router\modules\ArticleCreate.js
 * @Description:
 */
import layout from '@/layout'

export default {
  path: '/article',
  component: layout,
  redirect: '/article/ranking',
  name: 'articleCreate',
  meta: {
    title: 'article',
    icon: 'article'
  },
  children: [
    {
      path: '/article/create',
      name: 'articleCreate',
      component: () => import('@/views/article-create/index'),
      meta: {
        title: 'articleCreate',
        icon: 'article-create'
      }
    },
    {
      path: '/article/editor/:id',
      name: 'articleEditorId',
      component: () => import('@/views/article-create/index'),
      meta: {
        title: 'articleEditor'
      }
    }
  ]
}
