/*
 * @Author: GZH
 * @Date: 2021-12-15 20:09:30
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-15 20:12:20
 * @FilePath: \vue3-admin\src\i18n\index.js
 * @Description:
 */
// 创建数据源
import { createI18n } from 'vue-i18n'
const messages = {
  en: {
    msg: {
      test: 'hello world'
    }
  },
  zh: {
    msg: {
      test: '你好，世界'
    }
  }
}

const locale = 'en'

const i18n = createI18n({
  // 使用 composition API
  legacy: false,
  // 全局使用 t函数
  globalInjection: true,
  locale,
  messages
})

export default i18n
