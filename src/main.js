/*
 * @Author: GZH
 * @Date: 2021-11-13 18:51:39
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-15 20:13:24
 * @FilePath: \vue3-admin\src\main.js
 * @Description:
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import '@/styles/index.scss'

// 导入 全局注册 icons 组件
import installIcons from '@/icons'

// 导入路由鉴权
import './permission'
import i18n from './i18n'

const app = createApp(App)
installElementPlus(app)
installIcons(app)
app.use(store).use(router).use(i18n).mount('#app')

// console.warn(process.env.VUE_APP_BASE_API)
