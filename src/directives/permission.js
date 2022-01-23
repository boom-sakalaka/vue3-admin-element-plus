import store from '@/store'

/*
 * @Author: GZH
 * @Date: 2022-01-23 19:12:03
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-23 19:26:24
 * @FilePath: \vue3-admin-element-plus\src\directives\permission.js
 * @Description:
 */
function checkPermission(el, binding) {
  // 获取对应的权限
  const { value } = binding
  // 获取所有的功能指令
  const points = store.getters.userInfo.permission.points

  // 当传入的指令集是数组时，
  if (value && value instanceof Array) {
    // 匹配对应的指令
    const hasPermission = points.some((point) => {
      return value.includes(point)
    })

    if (!hasPermission) {
      el.parentNode && el.parentNode.removeChild(el)
    }
  } else {
    throw new Error('v-permission value is ["admin","editor"...]')
  }
}

export default {
  // 挂载
  mounted(el, binding) {
    checkPermission(el, binding)
  },

  // 更新后调用
  updated(el, binding) {
    checkPermission(el, binding)
  }
}
