/*
 * @Author: GZH
 * @Date: 2021-11-14 16:16:58
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-15 23:25:37
 * @FilePath: \vue3-admin\src\views\login\rules.js
 * @Description: 自定义验证规则
 */

import i18n from '@/i18n'

export const validatePassword = () => {
  return (rule, value, callback) => {
    if (value.length < 6) {
      callback(new Error(i18n.global.t('msg.login.passwordRule')))
    } else {
      callback()
    }
  }
}
export const validateUsername = () => {
  return (rule, value, callback) => {
    if (value.length === 0) {
      callback(new Error(i18n.global.t('msg.login.passwordRule')))
    } else {
      callback()
    }
  }
}
