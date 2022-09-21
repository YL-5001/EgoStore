import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    // 重定向
    redirect:'/product'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/index.vue')
  },
  {
    path: '/content',
    name: 'content',
    component: () => import('@/views/Content/index.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('@/views/Product/index.vue')
  },
  {
    path: '/params',
    name: 'params',
    component: () => import('@/views/Params/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
