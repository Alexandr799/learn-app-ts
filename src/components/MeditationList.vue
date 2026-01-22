<script setup lang="ts">
import { useMeditationStore } from '@/stores/meditation.store';
import { onMounted } from 'vue';
import VButton from './ui/VButton.vue';
import IconPlay from './icon/IconPlay.vue';
import { useRouter } from 'vue-router';
import { DETAIL_PATH_MEDITATION } from '@/routes';

const store = useMeditationStore()
const router = useRouter()
onMounted(() => {
  store.getMeditation()
})
</script>

<template>
  <div>
    <template v-if="store.loading">
      <p>Загрузка...</p>
    </template>
    <template v-else-if="store.error">
      <p>{{ store.error }}</p>
    </template>
    <template v-else-if="store.meditationList?.length">
      <ul class="wrap">
        <li v-for="meditation in store.meditationList" :key="meditation.id" class="wrap-item">
          <article class="meditation">
            <h3 class="title">
              {{ meditation.title }}
            </h3>
            <div class="meditation__text">
              {{ meditation.description }}
            </div>
            <div class="meditation__bottom">
              <div>
                <VButton @click="router.push({ name: DETAIL_PATH_MEDITATION, params: { id: meditation.id } })">
                  Начать
                  <template #icon>
                    <IconPlay />
                  </template>
                </VButton>
              </div>
              <div class="meditation__time">
                {{ meditation.duration_min }} мин
              </div>
            </div>
          </article>
        </li>
      </ul>
    </template>
    <template v-else>
      <p>
        Медитаций пока нет... Скоро добавим!
      </p>
    </template>
  </div>
</template>

<style scoped>
.wrap {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.wrap-item {
  width: calc(50% - 10px);
}

.meditation {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: var(--color-card);
  padding: 25px 35px;
  color: var(--color-fg-inverse);
}

.title {
  padding: 0;
  margin: 0 0 15px 0;
  font-weight: 700;
  font-size: 25px;
}

.meditation__bottom {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}

.meditation__text {
  margin-bottom: 15px;
  font-weight: 500;
  font-size: 15px;
}

.meditation__time {
  color: var(--color-bg);
}
</style>
