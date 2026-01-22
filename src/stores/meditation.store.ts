import { API_ROUTES, client } from '@/api'
import type { Meditation } from '@/interfaces/meditation.interface'
import type { MeditationResponse } from '@/interfaces/meditation.response.interface'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMeditationStore = defineStore('meditation', () => {
  const meditationList = ref<Array<Meditation> | null>(null)
  const error = ref<null | string>(null)
  const loading = ref<boolean>(false)
  const getMeditation = async () => {
    loading.value = true
    error.value = null
    meditationList.value = null
    try {
      const { data } = await client().get<MeditationResponse>(API_ROUTES.meditations)
      if (data.status !== 'success') {
        throw new Error('Что-то пошло не так!')
      }

      meditationList.value = data.data.meditations
    } catch {
      error.value = 'Что-то пошло не так!'
    } finally {
      loading.value = false
    }
  }

  const getMeditationById = (id: number) => {
    return meditationList.value?.find((el) => {
      return el.id === id
    })
  }
  return { meditationList, error, loading, getMeditation, getMeditationById }
})
