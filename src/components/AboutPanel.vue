<script setup lang="ts">
import { useProfileStore } from '@/stores/profile.store'
import { onMounted, ref, watch } from 'vue'
import type { Profile } from '@/interfaces/profile.interface'
import FeelingPanel from './FeelingPanel.vue'

const profileStore = useProfileStore()
const error = ref<string | null>(null)
const loading = ref<boolean>(false)
const profile = ref<Profile | null>()
onMounted(async () => {
  await profileStore.fetchProfile()
})
watch(() => ({
  loading: profileStore.loading,
  error: profileStore.error,
  profile: profileStore.profile,
}), (data) => {
  profile.value = data.profile
  error.value = data.error
  loading.value = data.loading
})

</script>

<template>
  <template v-if="loading">
    Загрузка профиля...
  </template>
  <template v-else-if="error">
    Что-то пошло не так... {{ error }}
  </template>
  <template v-else-if="profile">
    <div>
      <div class="image-wrapper">
        <img class="image" src="" alt="Фото профиля" />
      </div>
    </div>

    <div>
      <h1 class="title">Добро пожаловать, {{ profile.username }}!</h1>
      <div class="lead">Как вы сегодня себя чувствуете?</div>
    </div>

    <div style="padding-top: 40px;">
      <FeelingPanel />
    </div>
  </template>
  <template v-else>
    Что-то пошло не так...
  </template>
</template>

<style scoped>
.image {
  width: 100%;
  height: 100%;
}

.image-wrapper {
  width: 129px;
  height: 129px;
  border-radius: 50%;
  overflow: hidden;
}

.title {
  margin: 0;
  padding: 0;
  margin-top: 30px;
  margin-bottom: 10px;
}

.lead {
  color: rgba(255, 255, 255, 0.7);
}
</style>
