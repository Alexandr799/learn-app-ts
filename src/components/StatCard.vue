<script lang="ts" setup>
import { computed } from 'vue';

const { type = 'total_anxiety', value } = defineProps<{ type?: string, colorSecond?: string, value: string | number }>()

const statSummary = {
  total_anxiety: ['#69B09C', '#2B5B54', 'Минут медитации'],
  total_calm: ['#69B069', '#2B5B33', 'Спокойных дней'],
  total_focus: ['#9CB069', '#595B2B', 'Расслабленных дней'],
  total_minutes: ['#B0696A', '#5B2B2C', 'Фокусированных дней'],
  total_relax: ['#69A1B0', '#2B505B', 'Тревожных дней'],
}

const colorFirst = computed(() => {
  if (type in statSummary) {
    const value = statSummary[type as keyof typeof statSummary];
    if (Array.isArray(value) && value.length > 0) {
      return value[0];
    }
  }
  return statSummary.total_anxiety[0];
});

const colorSecond = computed(() => {
  if (type in statSummary) {
    const value = statSummary[type as keyof typeof statSummary];
    if (Array.isArray(value) && value.length > 1) {
      return value[1];
    }
  }
  return statSummary.total_anxiety[1];
});

const title = computed(() => {
  if (type in statSummary) {
    const value = statSummary[type as keyof typeof statSummary];
    if (Array.isArray(value) && value.length > 2) {
      return value[2];
    }
  }
  return statSummary.total_anxiety[2];
});
</script>

<template>
  <div class="wrap" :style="{ backgroundColor: colorFirst }">
    <div style="flex-grow: 1;">
      <div style="display: flex;align-items: center;">
        <div style="flex-grow: 1;">

        </div>
        <div class="value">
          {{ value }}
        </div>
      </div>
    </div>
    <div style="position: relative;">
      <span style="position: absolute;top: 30px;left: 15px;font-size: 18px;font-weight: 500;">
        {{ title }}
      </span>
      <svg class="icon" viewBox="0 0 300 98" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M64.954 11.692C32.0606 -3.80799 14.8439 2.692 -5.25808e-08 7.192L-5.82027e-07 79.6097C3.46357 94.0755 11.3391 97.692 14.8439 97.692L283.745 97.692C295.868 93.5589 299.745 84.029 299.745 79.7237L299.745 12.192C279.706 1.85927 218.375 2.19202 190.478 22.692C163.245 -2.80798 82.7451 -7.30801 64.954 11.692Z"
          :fill="colorSecond" />
      </svg>
    </div>
  </div>
</template>


<style scoped>
.wrap {
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 100%;
  border-radius: 20px;
}

.icon {
  width: 300px;
  height: 98px;
  margin-bottom: -20px;
}

.value {
  font-weight: 700;
  font-size: 80px;
  padding-right: 20px;
  padding-left: 20px;
}
</style>
