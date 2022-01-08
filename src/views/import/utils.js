/*
 * @Author: GZH
 * @Date: 2022-01-08 21:55:25
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-08 22:19:50
 * @FilePath: \vue3-admin-element-plus\src\views\import\utils.js
 * @Description:
 */
export const USER_RELATIONS = {
  姓名: 'username',
  联系方式: 'mobile',
  角色: 'role',
  开通时间: 'openTime'
}

export const formatDate = (numb) => {
  const time = new Date((numb - 1) * 24 * 3600000 + 1)
  time.setFullYear(time.getFullYear() - 70)
  const year = time.getFullYear() + ''
  const month = time.getMonth() + 1 + ''
  const date = time.getDate() - 1 + ''

  return year + '-' + (month < 10 ? '0' + month : month) + '-' + (date < 10 ? '0' + date : date)
}
