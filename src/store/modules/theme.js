/*
 * @Author: GZH
 * @Date: 2021-12-19 17:13:02
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-19 21:19:01
 * @FilePath: \vue3-admin\src\store\modules\theme.js
 * @Description: 主题存储
 */
import { getItem, setItem } from '@/utils/storage'
import { MAIN_COLOR, DEFAULT_COLOR } from '@/constant'
import variables from '@/styles/variables.scss'

export default {
  namespaced: true,
  state: () => ({
    mainColor: getItem(MAIN_COLOR) || DEFAULT_COLOR,
    variables: variables
  }),
  mutations: {
    setMainColor(state, newColor) {
      state.mainColor = newColor
      state.variables.menuBg = newColor
      setItem(MAIN_COLOR, newColor)
    }
  },
  actions: {}
}
