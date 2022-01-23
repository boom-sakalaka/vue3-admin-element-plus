/*
 * @Author: GZH
 * @Date: 2022-01-23 17:46:04
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-23 18:00:23
 * @FilePath: \vue3-admin-element-plus\src\router\modules\Article.js
 * @Description:
 */
import layout from '@/layout'

export default {
  path: '/article',
  component: layout,
  redirect: '/article/ranking',
  name: 'articleRanking',
  meta: {
    title: 'article',
    icon: 'article'
  },
  children: [
    {
      path: '/article/ranking',
      name: 'articleRanking',
      component: () => import('@/views/article-ranking/index'),
      meta: {
        title: 'articleRanking',
        icon: 'article-ranking'
      }
    },
    {
      path: '/article/:id',
      name: 'articleId',
      component: () => import('@/views/article-detail/index'),
      meta: {
        title: 'articleDetail'
      }
    }
  ]
}
