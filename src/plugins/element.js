/*
 * @Author: GZH
 * @Date: 2021-11-14 10:42:17
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-15 21:01:40
 * @FilePath: \vue3-admin\src\plugins\element.js
 * @Description:
 */
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import store from '@/store'

export default (app) => {
  app.use(ElementPlus, { locale: store.getters.language === 'en' ? en : zhCn })
}
