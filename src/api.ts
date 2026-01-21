import axios from 'axios'
import { useAuthStore } from './stores/auth.store'

export const client = () => {
  const authStore = useAuthStore()
  return axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 1000,
    headers: {
      Authorization: `Bearer ${authStore.getToken || '-'}`,
    },
  })
}

export const API_ROUTES = {
  meditations: '/meditations',
  register: '/auth/register',
  login: '/auth/login',
  profile: '/profile',
}
