import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Resume from '@/pages/Resume.vue'
import layout from '@/layouts/layout.vue'
import Professional from '@/pages/Professional.vue'

const routes = [
  {
    path: '/',
    component: layout,
    children: [
      {
        path: '/',
        name: 'aboutMe',
        component: Home,
      },
      {
        path: '/resume',
        name: 'resume',
        component: Resume,
      },
      {
        path: '/professional',
        name: 'professional',
        component: Professional,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router
