/*
 * @Author: GZH
 * @Date: 2021-11-14 16:16:58
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-14 16:18:41
 * @FilePath: \vue3-admin\src\views\login\rules.js
 * @Description: 自定义验证规则
 */

export const validatePassword = () => {
  return (rule, value, callback) => {
    if (value.length < 6) {
      callback(new Error('密码不能少于6位'))
    } else {
      callback()
    }
  }
}
