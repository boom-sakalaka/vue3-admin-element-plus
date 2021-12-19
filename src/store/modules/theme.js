/*
 * @Author: GZH
 * @Date: 2021-12-19 17:13:02
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-19 17:22:52
 * @FilePath: \vue3-admin\src\store\modules\theme.js
 * @Description: 主题存储
 */
import { getItem, setItem } from '@/utils/storage'
import { MAIN_COLOR, DEFAULT_COLOR } from '@/constant'

export default {
  namespaced: true,
  state: () => ({
    mainColor: getItem(MAIN_COLOR) || DEFAULT_COLOR
  }),
  mutations: {
    setMainColor(state, newColor) {
      state.mainColor = newColor
      setItem(MAIN_COLOR, newColor)
    }
  },
  actions: {}
}
