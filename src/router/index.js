import { createRouter, createWebHistory } from 'vue-router'
import layout from '@/layouts/layout.vue'

const routes = [
  {
    path: '/',
    component: layout,
    children: [
      {
        path: '/',
        name: 'aboutMe',
        component: () => import('@/pages/Home.vue'),
      },
      {
        path: '/resume',
        name: 'resume',
        component: () => import('@/pages/Resume.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router
