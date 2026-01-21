import { API_ROUTES, client } from '@/api'
import type { StatResponse } from '@/interfaces/stat.response'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStatStore = defineStore('stat', () => {
  const error = ref<null | string>(null)
  const loading = ref<boolean>(false)

  async function pushStat(type: string, value: number) {
    try {
      error.value = null
      loading.value = true
      await client().post<StatResponse>(API_ROUTES.stat, {
        type, value
      })

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
  return {
    error,
    loading,
    pushStat,
  }
})
