<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router';
import IconLogo from './icon/IconLogo.vue';
import IconChart from './icon/IconChart.vue';
import IconExit from './icon/IconExit.vue';
import { useAuthStore } from '@/stores/auth.store';
import { START_PATH } from '@/routes';

const storeAuth = useAuthStore()
const router = useRouter()
function exit() {
  storeAuth.clearToken()
  router.push({ name: START_PATH })
}
</script>

<template>
  <nav class="nav">
    <div>
      <router-link to="/main">
        <IconLogo :width="180" :height="195" />
      </router-link>
    </div>
    <div>
      <ul class="list">
        <li class="item">
          <router-link to="/main" class="link" active-class="active-link">
            <IconChart :color="$route.path === '/main' ? 'white' : 'rgba(255, 255, 255, 0.5)'" />
            <span>
              Медитация
            </span>
          </router-link>
        </li>
        <li class="item">
          <router-link to="/stat" class="link" active-class="active-link">
            <IconChart :color="$route.path === '/stat' ? 'white' : 'rgba(255, 255, 255, 0.5)'" />
            <span>
              Статистика
            </span>
          </router-link>
        </li>
        <li class="item">
          <button class="link" @click="exit">
            <IconExit />
            <span>
              Выход
            </span>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.list {
  display: flex;
  align-items: center;

}

.item {
  padding: 30px;
}

.item:not(:last-child) {
  border-right: 1px solid rgba(255, 255, 255, 0.5);
}

.link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.link>span {
  color: rgba(255, 255, 255, 0.5);
}

.active-link>span {
  color: white;
}
</style>
