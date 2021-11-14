/*
 * @Author: GZH
 * @Date: 2021-11-13 18:51:40
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-14 11:13:18
 * @FilePath: \vue3-admin\src\router\index.js
 * @Description:
 */
import { createRouter, createWebHashHistory } from 'vue-router'

/* 公开路由表 */
const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
