/*
 * @Author: GZH
 * @Date: 2021-11-14 20:08:18
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-23 18:58:55
 * @FilePath: \vue3-admin-element-plus\src\permission.js
 * @Description: 路由守卫
 */
import router from '@/router'
import store from '@/store'

// 白名单
const whiteList = ['/login']

/**
 * 路由前置守卫
 */
router.beforeEach(async (to, from, next) => {
  if (store.getters.token) {
    // 1. 用户已登录
    if (to.path === '/login') {
      next('/')
    } else {
      // 判断用户资料是否存在，如果不存在，则获取用户信息
      if (!store.getters.hasUserInfo) {
        const { permission } = await store.dispatch('user/getUserInfo')
        // 处理用户权限相关,筛选出需要新加的路由
        const filterRoutes = await store.dispatch('permission/filterRoutes', permission.menus)
        // 循环添加动态路由
        filterRoutes.forEach((item) => {
          router.addRoute(item)
        })

        // 添加完动态路由后 需要进行主动跳转才生效
        return next(to.path)
      }
      next()
    }
  } else {
    // 2. 用户未登录，只允许进入白名单中的路由
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
