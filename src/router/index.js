import { createRouter, createWebHistory } from 'vue-router'
import layout from '@/layouts/layout.vue'
import HomeView from '@/components/HomeView.vue'

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
