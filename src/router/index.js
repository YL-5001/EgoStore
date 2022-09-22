import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/index.vue')
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/Layout.vue'),
    children: [
      {
        path: '/',
        // 重定向
        redirect:'/product'
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
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
