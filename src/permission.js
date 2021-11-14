/*
 * @Author: GZH
 * @Date: 2021-11-14 20:08:18
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-14 20:15:22
 * @FilePath: \vue3-admin\src\permission.js
 * @Description: 路由守卫
 */
import router from '@/router'
import store from '@/store'

// 白名单
const whiteList = ['/login']

/**
 * 路由前置守卫
 */
router.beforeEach((to, from, next) => {
  if (store.getters.token) {
    // 1. 用户已登录
    if (to.path === '/login') {
      next('/')
    } else {
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
