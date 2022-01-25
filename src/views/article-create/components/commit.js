/*
 * @Author: GZH
 * @Date: 2022-01-25 21:50:08
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-25 22:18:41
 * @FilePath: \vue3-admin-element-plus\src\views\article-create\components\commit.js
 * @Description:
 */
import { createArticle, editorArticle } from '@/api/article'
import { ElMessage } from 'element-plus'
import i18n from '@/i18n'

const t = i18n.global.t
export const commitArticle = async (data) => {
  const res = await createArticle(data)
  ElMessage.success(t('msg.article.createSuccess'))
  return res
}

export const editArticle = async (data) => {
  const res = await editorArticle(data)
  ElMessage.success(t('msg.article.editorSuccess'))
  return res
}
