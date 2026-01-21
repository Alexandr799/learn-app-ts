import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from './stores/auth.store'

export const AUTH_PATH = 'auth'
export const REG_PATH = 'reg'
export const START_PATH = 'start'
export const MAIN_PATH = 'main'

export const router = createRouter({
  routes: [
    // {
    //   path: '/:pathMatch(.*)*',
    //   component: import('@/compenents/views/NotFound.vue'),
    //   name: 'NotFound',
    // },
    {
      path: '/',
      component: () => import('@/compenents/views/StartView.vue'),
      name: START_PATH,
    },
    {
      path: '/auth',
      component: () => import('@/compenents/views/AuthView.vue'),
      name: AUTH_PATH,
    },
    {
      path: '/register',
      component: () => import('@/compenents/views/RegisterView.vue'),
      name: REG_PATH,
    },
    {
      path: '/main',
      component: () => import('@/compenents/views/MainView.vue'),
      children: [
        {
          path: '',
          component: () => import('@/compenents/views/main/IndexView.vue'),
          name: MAIN_PATH,
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

router.beforeEach((to) => {
  const authStore = useAuthStore()

  // Для не авторизованных
  if (!authStore.getToken) {
    if (to.name === AUTH_PATH) {
      return
    }
    if (to.name === REG_PATH) {
      return
    }
    if (to.name === START_PATH) {
      return
    }

    return { name: AUTH_PATH }
  }

  // Для авторизованных
  if (to.name === AUTH_PATH) {
    return { name: MAIN_PATH }
  }
  if (to.name === REG_PATH) {
    return { name: MAIN_PATH }
  }
  if (to.name === START_PATH) {
    return { name: MAIN_PATH }
  }
})
