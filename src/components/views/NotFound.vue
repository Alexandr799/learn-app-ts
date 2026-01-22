<script setup lang="ts">
import { useRouter } from 'vue-router';
import VButtonPrimary from '../ui/VButtonPrimary.vue';

const router = useRouter()
</script>

<template>
  <div class="head-wrap">

    <h1 style="text-align: center;font-size: 128px;">
      404
    </h1>
    <div class="wrap wrap-button">
      <VButtonPrimary @click="() => router.push('/main')">
        На главную
      </VButtonPrimary>
    </div>
  </div>
</template>

<style scoped>
.head-wrap {
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.wrap-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
