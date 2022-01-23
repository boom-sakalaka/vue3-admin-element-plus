/*
 * @Author: GZH
 * @Date: 2022-01-23 17:38:42
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-23 18:54:53
 * @FilePath: \vue3-admin-element-plus\src\store\modules\permission.js
 * @Description:
 */
import { publicRoutes, privateRouters } from '@/router'
export default {
  namespaced: true,
  state: () => ({
    // 路由表 初始
    routes: publicRoutes
  }),
  mutations: {
    /* 增加路由 */
    setRoutes(state, newRoutes) {
      state.routes = [...publicRoutes, ...newRoutes]
    }
  },
  actions: {
    filterRoutes(context, meneus) {
      // 筛选之后，需要通过addRoute 进行添加的路由表
      const routes = []

      meneus.forEach((key) => {
        routes.push(...privateRouters.filter((item) => item.name === key))
      })

      routes.push({
        path: '/:catchAll(.*)',
        redirect: '/404'
      })

      context.commit('setRoutes', routes)

      return routes
    }
  }
}
