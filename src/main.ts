import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // 新增這一行導入路由
import 'tailwindcss/tailwind.css'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router) // 新增這一行使用路由器

app.mount('#app')
