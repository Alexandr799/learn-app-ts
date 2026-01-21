import { API_ROUTES, client } from '@/api'
import type { RegistrationResponse } from '@/interfaces/register.interface'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRegStore = defineStore('reg', () => {
  const error = ref<null | string>(null)
  const loading = ref<boolean>(false)

  async function register(email: string, password: string, username: string) {
    try {
      error.value = null
      loading.value = true

      const data = await client().post<RegistrationResponse>(API_ROUTES.register, {
        password,
        email,
        username,
      })
      return data.data.data
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

  function clearError() {
    error.value = null
  }

  return { error, loading, register, clearError }
})
