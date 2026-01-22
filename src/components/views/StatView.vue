<script setup lang="ts">
import { useStatStore } from '@/stores/stat.store';
import MenuList from '../MenuList.vue';
import { onMounted, ref, watch } from 'vue';
import type { StatSummary } from '@/interfaces/stat.summary';
import StatCard from '../StatCard.vue';

const store = useStatStore()
const loading = ref<boolean>(false)
const error = ref<string | null>(null)
const statSummary = ref<StatSummary | null>(null)

onMounted(async () => {
  await store.getStat()
})

watch(() => ({
  loading: store.loading,
  error: store.error,
  statSummary: store.statSummary
}), (data) => {
  loading.value = data.loading
  error.value = data.error
  statSummary.value = data.statSummary
})

</script>
<template>
  <div class="menu">
    <MenuList />
  </div>
  <div v-if="loading" style="display: flex;align-items: center;justify-content: center;">
    Загрузка ...
  </div>
  <div v-else-if="error" style="display: flex;align-items: center;justify-content: center;">
    {{ error }}
  </div>
  <div class="content" v-else-if="statSummary" style="display: flex;align-items: center;justify-content: center;">
    <div v-for="[key, value] in Object.entries(statSummary)" :key="key" class="content-item">
      <StatCard :type="key" :value="value"/>
    </div>
  </div>
  <div v-else>
    Что-то пошло не так...
  </div>
</template>

<style scoped>
.menu {
  padding-right: 30px;
}

.content {
  padding: 0 30px;
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
}


</style>
