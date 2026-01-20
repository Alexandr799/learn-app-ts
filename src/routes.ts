import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  routes: [
    {
      path: '/',
      component: import('@/compenents/views/AuthView.vue'),
    },
    {
      path: '/main',
      component: () => import('@/compenents/views/MainView.vue'),
      children: [
        {
          path: '',
          component: () => import('@/compenents/views/main/IndexView.vue'),
        },
        {
          path: '/main/:id',
          component: () => import('@/compenents/views/main/DetailView.vue'),
        },
      ],
    },

    {
      path: '/stat',
      component: () => import('@/compenents/views/StatView.vue'),
    },
  ],
  history: createWebHistory(),
})
