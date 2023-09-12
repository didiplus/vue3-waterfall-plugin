/*
 * @Author: Yaowen Liu
 * @Date: 2022-03-08 13:13:56
 * @LastEditors: didiplus 
 * @LastEditTime: 2023-09-11 17:20:25
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import 'element-plus/dist/index.css'
import './index.css'
import 'animate.css'


const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
