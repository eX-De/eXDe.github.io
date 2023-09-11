import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './style.css'
import App from './App.vue';
import {routes} from './routes.js';
import {messages} from "./i18n.js";
import { createPinia } from 'pinia';
import * as VueRouter from 'vue-router';
import 'tdesign-vue-next/es/style/index.css';
import TDesign from 'tdesign-vue-next';
import enConfig from 'tdesign-vue-next/es/locale/en_US';
import zhConfig from 'tdesign-vue-next/es/locale/zh_CN';
const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'zh',
    messages
})
const pinia = createPinia()
const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})
let app = createApp(App)

app.use(router)
app.use(i18n)
app.use(pinia)
app.use(TDesign)
app.mount('#app')
