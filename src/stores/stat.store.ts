import { API_ROUTES, client } from '@/api'
import type { StatDayResponse } from '@/interfaces/stat.day.response'
import type { StatResponse } from '@/interfaces/stat.response'
import type { StatSummary } from '@/interfaces/stat.summary'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStatStore = defineStore('stat', () => {
  const error = ref<null | string>(null)
  const loading = ref<boolean>(false)
  const statSummary = ref<StatSummary | null>(null)

  async function pushStat(type: string, value: number) {
    try {
      error.value = null
      loading.value = true
      await client().post<StatDayResponse>(API_ROUTES.stat, {
        type,
        value,
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

  async function getStat() {
    try {
      error.value = null
      loading.value = true
      const { data } = await client().get<StatResponse>(API_ROUTES.stat)
      statSummary.value = data.data.summary
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
    statSummary,
    pushStat,
    getStat,
  }
})
