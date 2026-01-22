import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from './stores/auth.store'

export const AUTH_PATH = 'auth'
export const REG_PATH = 'reg'
export const START_PATH = 'start'
export const MAIN_PATH = 'main'
export const NOT_FOUND = 'not_found'
export const DETAIL_PATH_MEDITATION = 'detail_path_meditation'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/components/views/StartView.vue'),
      name: START_PATH,
    },
    {
      path: '/auth',
      component: () => import('@/components/views/AuthView.vue'),
      name: AUTH_PATH,
    },
    {
      path: '/register',
      component: () => import('@/components/views/RegisterView.vue'),
      name: REG_PATH,
    },
    {
      path: '/main',
      component: () => import('@/components/views/MainView.vue'),
      children: [
        {
          path: '', // Пустой путь для /main
          component: () => import('@/components/views/main/IndexView.vue'),
          name: MAIN_PATH,
        },
        {
          path: ':id', // Относительный путь, будет /main/:id
          component: () => import('@/components/views/main/DetailView.vue'),
          name: DETAIL_PATH_MEDITATION
        },
      ],
    },
    {
      path: '/stat',
      component: () => import('@/components/views/StatView.vue'),
    },
    {
      path: '/:pathMatch(.*)*', // Должен быть последним
      component: () => import('@/components/views/NotFound.vue'),
      name: NOT_FOUND,
    },
  ]
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
