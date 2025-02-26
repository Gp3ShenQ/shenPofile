import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Resume from '@/pages/Resume.vue'
import Project from '@/pages/Project.vue'
import layout from '@/layouts/layout.vue'
import Professional from '@/pages/Professional.vue'

const routes = [
  {
    path: '',
    component: layout,
    children: [
      {
        path: '',
        name: 'aboutMe',
        component: Home,
      },
      {
        path: '/resume',
        name: 'resume',
        component: Resume,
      },
      {
        path: '/project',
        name: 'project',
        component: Project,
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
  history: createWebHashHistory('/'),
  routes,
})

export default router
