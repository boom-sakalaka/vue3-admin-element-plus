/*
 * @Author: GZH
 * @Date: 2022-01-23 17:45:34
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-23 17:55:58
 * @FilePath: \vue3-admin-element-plus\src\router\modules\RoleList.js
 * @Description:
 */
import layout from '@/layout'

export default {
  path: '/user',
  component: layout,
  name: 'roleList',
  meta: {
    title: 'user',
    icon: 'personnel'
  },
  children: [
    {
      path: '/user/role',
      name: 'userRole',
      component: () => import('@/views/role-list/index'),
      meta: {
        title: 'roleList',
        icon: 'role'
      }
    }
  ]
}
