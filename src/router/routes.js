const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/Index.vue')}
    ]
  },
  {
    path: '/auth',
    component: () => import('../pages/Auth.vue'),
    children: [
      {path: '', component: () => import('../components/Login')},
      {path: 'registration', component: () => import('../components/Registration')},
    ]

  },
  {
    path: '/main',
    component: () => import('pages/Main.vue')
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
