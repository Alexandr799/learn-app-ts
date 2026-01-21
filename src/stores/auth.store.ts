import { API_ROUTES, client } from '@/api'
import type { AuthResponse } from '@/interfaces/auth.interface'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'


const TOKEN_STORE_KEY = 'auth-store-meditation'
export const useAuthStore = defineStore('auth', () => {
  const error = ref<null | string>(null)
  const loading = ref<boolean>(false)
  const token = ref<string | null>(localStorage.getItem(TOKEN_STORE_KEY))

  function setToken(tokenValue: string | null) {
    token.value = tokenValue
    if (tokenValue) {
      localStorage.setItem(TOKEN_STORE_KEY, tokenValue)
    } else {
      localStorage.removeItem(TOKEN_STORE_KEY)
    }
  }

  function clearToken() {
    setToken(null)
  }

  function clearError() {
    error.value = null
  }

  const getToken = computed(() => {
    return token.value
  })

  async function login(password: string, username: string) {
    try {
      setToken(null)
      token.value = null
      error.value = null
      loading.value = true

      const { data } = await client().post<AuthResponse>(API_ROUTES.login, {
        password,
        username,
      })
      setToken(data.data.token)
    } catch (e) {
      if (e instanceof Error) {
        error.value = e.message
      } else {
        error.value = 'Что-то пошло не так!'
      }
    } finally {
      loading.value = false
    }
  }

  return { error, loading, getToken, clearToken, login, clearError }
})
