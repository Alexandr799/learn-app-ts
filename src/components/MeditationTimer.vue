<script lang="ts" setup>
import { type Meditation } from '@/interfaces/meditation.interface'
import { computed, onUnmounted, ref } from 'vue';
import IconPlay from './icon/IconPlay.vue';
import IconPause from './icon/IconPause.vue';
import IconBackspace from './icon/IconBackspace.vue';
import IconRepeat from './icon/IconRepeat.vue';

const { meditation } = defineProps<{ meditation: Meditation }>()
const isRunning = ref<boolean>(false)
const seconds = ref(0);
const timerId = ref<number>();
const emit = defineEmits<{
  (e: 'resetTimer', value: number): void
}>()
const startTimer = () => {
  if (!isRunning.value) {
    isRunning.value = true;
    timerId.value = setInterval(() => {
      if (meditation.duration_min * 60 <= seconds.value) {
        resetTimer()
        return
      }
      seconds.value++;
    }, 1000);
  }
};

const stopTimer = () => {
  isRunning.value = false;
  clearInterval(timerId.value);
};

const resetTimer = () => {
  stopTimer();
  emit('resetTimer', seconds.value)
  seconds.value = 0;
};

const resetAndRepeat = () => {
  resetTimer();
  startTimer()
}

onUnmounted(() => {
  if (seconds.value > 0 || isRunning.value) {
    resetTimer()
  }
});

const timerData = computed(() => {
  const totalSeconds = meditation.duration_min * 60 - seconds.value
  const sec = totalSeconds % 60
  const min = Math.floor(totalSeconds / 60)
  const formattedSec = sec.toString().padStart(2, '0')
  return `${min}:${formattedSec}`
})


</script>

<template>
  <div v-if="meditation" style="display: flex;flex-direction: column;align-items: center;padding-top: 50px;">
    <div style="width: 250px;height: 250px;">
      <div class="timer" style="font-size: 44px;">
        {{ timerData }}
      </div>
    </div>
    <h1 style="text-align: center;font-weight: 500;font-size: 35px;">
      {{ meditation.title }}
    </h1>
    <div>
      {{ meditation.description }}
    </div>
    <div style="display: flex;gap:15px;align-items: center;justify-content: center;padding-top: 20px;">
      <div>
        <button @click="resetTimer">
          <IconBackspace />
        </button>
      </div>
      <div>
        <button v-if="!isRunning" @click="startTimer">
          <IconPlay :size="75" />
        </button>
        <button v-else>
          <IconPause :size="75" @click="stopTimer" />
        </button>
      </div>
      <div>
        <button @click="resetAndRepeat">
          <IconRepeat />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timer {
  width: 100%;
  height: 100%;
  background-image: url('../assets/img/meditation.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
