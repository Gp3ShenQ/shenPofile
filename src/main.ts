import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // 新增這一行導入路由
import 'tailwindcss/tailwind.css'

const app = createApp(App)

app.use(router) // 新增這一行使用路由器

app.mount('#app')
