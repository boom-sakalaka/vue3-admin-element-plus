/*
 * @Author: GZH
 * @Date: 2021-12-16 09:48:42
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-22 21:46:09
 * @FilePath: \vue3-admin\src\utils\i18n.js
 * @Description: 用于sideBar 侧边栏菜单的标题使用
 */
import i18n from '@/i18n'
import store from '@/store'
import { watch } from 'vue'
export function generateTitle(title) {
  return i18n.global.t('msg.route.' + title)
}

export function watchSwitchLang(...cbs) {
  watch(
    () => store.getters.language,
    () => {
      cbs.forEach((cb) => cb(store.getters.language))
    }
  )
}
