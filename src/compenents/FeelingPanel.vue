<script setup lang="ts">
import IconCalm from './icon/IconCalm.vue'
import IconFocus from './icon/IconFocus.vue'
import IconRelax from './icon/IconRelax.vue'
import VButtonIcon from './ui/VButtonIcon.vue'
import { ref, watch } from 'vue'
import { useStatStore } from '@/stores/stat.store'

const storeStat = useStatStore()
const error = ref<string | null>(null)
const loading = ref<boolean>(false)

watch(() => ({
  loading: storeStat.loading,
  error: storeStat.error,
}), (data) => {
  error.value = data.error
  loading.value = data.loading
})
function push(type: string) {
  storeStat.pushStat(type, 1)
}
</script>
<template>
  <template v-if="loading">
    Обновал...
  </template>
  <template v-else>
    <div class="button-wrapper">
      <div>
        <VButtonIcon @click="push('feeling_calm')">
          <template #icon>
            <IconCalm />
          </template>
          <template #text> Спокойно </template>
        </VButtonIcon>
      </div>

      <div>
        <VButtonIcon @click="push('feeling_focus')">
          <template #icon>
            <IconRelax />
          </template>
          <template #text> Расслабленно </template>
        </VButtonIcon>
      </div>

      <div>
        <VButtonIcon @click="push('feeling_relax')">
          <template #icon>
            <IconFocus />
          </template>
          <template #text> Фокусировано </template>
        </VButtonIcon>
      </div>

      <div>
        <VButtonIcon @click="push('feeling_anxiety')">
          <template #icon>
            <IconRelax />
          </template>
          <template #text> Тревожно </template>
        </VButtonIcon>
      </div>
    </div>
    <div v-if="error">
      {{ error }}
    </div>
  </template>

</template>

<style scoped>
.button-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
}
</style>
