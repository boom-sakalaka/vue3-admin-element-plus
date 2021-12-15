/*
 * @Author: GZH
 * @Date: 2021-12-15 20:09:30
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-15 22:15:24
 * @FilePath: \vue3-admin\src\i18n\index.js
 * @Description:
 */
// 创建数据源
import { createI18n } from 'vue-i18n'
import zhLocale from './lang/zh'
import enLocale from './lang/en'

const messages = {
  en: {
    msg: {
      ...enLocale
    }
  },
  zh: {
    msg: {
      ...zhLocale
    }
  }
}

const locale = 'zh'

const i18n = createI18n({
  // 使用 composition API
  legacy: false,
  // 全局使用 t函数
  globalInjection: true,
  locale,
  messages
})

export default i18n
