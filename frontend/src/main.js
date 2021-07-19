import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { router } from './router/index'
import App from './App.vue'

import 'element-plus/lib/theme-chalk/index.css'
import './assets/style/index.css'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')