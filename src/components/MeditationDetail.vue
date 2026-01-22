<script setup lang="ts">
import type { Meditation } from '@/interfaces/meditation.interface'
import { NOT_FOUND } from '@/routes'
import { useMeditationStore } from '@/stores/meditation.store'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MeditationTimer from './MeditationTimer.vue'
import { useStatStore } from '@/stores/stat.store'

const store = useMeditationStore()
const storeStat = useStatStore()

const route = useRoute()
const router = useRouter()
const meditation = ref<Meditation>()

watch(
  () => route.params.id,
  async (data) => {
    if (typeof data !== 'string') {
      router.push({ name: NOT_FOUND })
      return
    }
    const id = parseInt(data)
    if (isNaN(id)) {
      router.push({ name: NOT_FOUND })
      return
    }
    if (!store.meditationList) {
      await store.getMeditation()
    }
    const res = store.getMeditationById(id)
    if (!res) {
      router.push({ name: NOT_FOUND })
      return
    }

    meditation.value = res
  },
  { immediate: true },
)

async function pushStat(value: number) {
  const minutes = Math.floor(value / 60)
  if (minutes <= 0) {
    return
  }
  storeStat.pushStat('duration_min', minutes)
}
</script>
<template>
  <div class="wrap">
    <MeditationTimer @reset-timer="pushStat" v-if="meditation" :meditation="meditation" />
  </div>
</template>

<style scoped>
.wrap {
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
}
</style>
