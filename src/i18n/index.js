/*
 * @Author: GZH
 * @Date: 2021-12-15 20:09:30
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-16 10:16:15
 * @FilePath: \vue3-admin\src\i18n\index.js
 * @Description:
 */
// 创建数据源
import { createI18n } from 'vue-i18n'
import zhLocale from './lang/zh'
import enLocale from './lang/en'
import store from '@/store'

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

// const locale = 'zh'

function getLanguage() {
  return store && store.getters && store.getters.language
}

const i18n = createI18n({
  // 使用 composition API
  legacy: false,
  // 全局使用 t函数
  globalInjection: true,
  locale: getLanguage(),
  messages
})

export default i18n
