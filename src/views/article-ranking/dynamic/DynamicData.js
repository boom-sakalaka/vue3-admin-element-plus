/*
 * @Author: GZH
 * @Date: 2022-01-24 10:41:22
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-24 10:53:52
 * @FilePath: \vue3-admin-element-plus\src\views\article-ranking\dynamic\DynamicData.js
 * @Description: 指定初始列数据
 */

import i18n from '@/i18n'

const t = i18n.global.t

export default () => [
  {
    label: t('msg.article.ranking'),
    prop: 'ranking'
  },
  {
    label: t('msg.article.title'),
    prop: 'title'
  },
  {
    label: t('msg.article.author'),
    prop: 'author'
  },
  {
    label: t('msg.article.desc'),
    prop: 'desc'
  },
  {
    label: t('msg.article.action'),
    prop: 'action'
  }
]
