/*
 * @Author: GZH
 * @Date: 2021-11-13 18:51:39
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-14 15:43:17
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

const app = createApp(App)
installElementPlus(app)
installIcons(app)
app.use(store).use(router).mount('#app')
