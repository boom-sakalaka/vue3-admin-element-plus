/*
 * @Author: GZH
 * @Date: 2021-12-16 09:48:42
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-16 09:50:20
 * @FilePath: \vue3-admin\src\utils\i18n.js
 * @Description: 用于sideBar 侧边栏菜单的标题使用
 */
import i18n from '@/i18n'
export function generateTitle(title) {
  return i18n.global.t('msg.route.' + title)
}
