/*
 * @Author: GZH
 * @Date: 2022-01-23 17:46:36
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-23 17:57:10
 * @FilePath: \vue3-admin-element-plus\src\router\modules\PermissionList.js
 * @Description:
 */
import layout from '@/layout'

export default {
  path: '/user',
  component: layout,
  name: 'permissionList',
  meta: {
    title: 'user',
    icon: 'personnel'
  },
  children: [
    {
      path: '/user/permission',
      name: 'userPermission',
      component: () => import('@/views/permission-list/index'),
      meta: {
        title: 'permissionList',
        icon: 'permission'
      }
    }
  ]
}
