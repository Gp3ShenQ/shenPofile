import { createRouter, createWebHistory } from 'vue-router'
import layout from '@/layouts/layout.vue'

const routes = [
  {
    path: '/',
    component: layout,
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router
