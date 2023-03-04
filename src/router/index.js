import { createRouter, createMemoryHistory } from 'vue-router'

const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index')
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes: publicRoutes
})

export default router
