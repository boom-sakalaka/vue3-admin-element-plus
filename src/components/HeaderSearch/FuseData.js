/*
 * @Author: GZH
 * @Date: 2021-12-22 21:19:53
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-22 21:32:44
 * @FilePath: \vue3-admin\src\components\HeaderSearch\FuseData.js
 * @Description:
 */
import path from 'path'
import i18n from '@/i18n'

export const generateRoutes = (routes, basePath = '/', prefixTitle = []) => {
  // 创建 result 数据
  let res = []

  for (const route of routes) {
    // 创建包含 path 和title 的 item
    const data = {
      path: path.resolve(basePath, route.path),
      title: [...prefixTitle]
    }

    // 当前存在 meta，使用i18n,组合成 新的 title
    // 动态路由不允许被检索
    const re = /.*\/:.*/
    if (route.meta && route.meta.title && !re.exec(route.path)) {
      const i18nTitle = i18n.global.t(`msg.route.${route.meta.title}`)
      data.title = [...data.title, i18nTitle]
      res.push(data)
    }
    // 存在children
    if (route.children) {
      const tempRouter = generateRoutes(route.children, data.path, data.title)

      if (tempRouter.length > 0) {
        res = [...res, ...tempRouter]
      }
    }
  }

  return res
}
