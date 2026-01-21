import { API_ROUTES, client } from '@/api'
import type { Profile } from '@/interfaces/profile.interface'
import type { ProfileResponse } from '@/interfaces/profile.response.interface'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProfileStore = defineStore('profile', () => {
  const error = ref<null | string>(null)
  const loading = ref<boolean>(false)
  const profile = ref<Profile | null>(null)

  async function fetchProfile() {
    try {
      error.value = null
      loading.value = true
      const { data } = await client().get<ProfileResponse>(API_ROUTES.profile)
      profile.value = data.data.user
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
    fetchProfile,
    profile,
  }
})
