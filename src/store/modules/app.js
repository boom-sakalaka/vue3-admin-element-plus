/*
 * @Author: GZH
 * @Date: 2021-12-09 23:11:06
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-15 20:19:42
 * @FilePath: \vue3-admin\src\store\modules\app.js
 * @Description:
 */
import { getItem, setItem } from '@/utils/storage'
import { LANG } from '@/constant'

export default {
  namespaced: true,
  state: () => ({
    sidebarOpened: true,
    language: getItem(LANG) || 'zh'
  }),
  mutations: {
    triggersidebarOpened(state) {
      state.sidebarOpened = !state.sidebarOpened
    },
    setLanguage(state, lang) {
      setItem(LANG, lang)
      state.language = lang
    }
  }
}
