/*
 * @Author: GZH
 * @Date: 2022-01-23 17:45:34
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-23 17:56:30
 * @FilePath: \vue3-admin-element-plus\src\router\modules\UserManager.js
 * @Description:
 */
import layout from '@/layout'

export default {
  path: '/user',
  component: layout,
  name: 'userManage',
  meta: {
    title: 'user',
    icon: 'personnel'
  },
  children: [
    {
      path: '/user/manage',
      name: 'userManage',
      component: () => import('@/views/user-manage/index'),
      meta: {
        title: 'userManage',
        icon: 'personnel-manage'
      }
    },

    {
      path: '/user/info/:id',
      name: 'userInfo',
      component: () => import('@/views/user-info/index'),
      props: true,
      meta: {
        title: 'userInfo'
      }
    },
    {
      path: '/user/import',
      name: 'userImport',
      component: () => import('@/views/import/index'),
      meta: {
        title: 'excelImport'
      }
    }
  ]
}
