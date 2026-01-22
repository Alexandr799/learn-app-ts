<script setup lang="ts">
import { useRouter } from 'vue-router';
import IconLogo from '../icon/IconLogo.vue';
import VButtonPrimary from '../ui/VButtonPrimary.vue';
import { AUTH_PATH, REG_PATH } from '@/routes';

const router = useRouter()
</script>
<template>
  <div class="wrap">
    <div class="logo-wrap">
      <div>
        <IconLogo />
      </div>
    </div>
    <h1 class="title">
      Добро пожаловать!
    </h1>
    <p class="lead">
      Медитируй и оставайся в фокусе, чтобы быть счастливым.
    </p>
    <div class="button-wrap" style="padding-bottom: 20px;">
      <VButtonPrimary class="button" @click="router.push({ name: AUTH_PATH })">
        Войти в приложение
      </VButtonPrimary>
    </div>

    <div class="button-wrap">
      <VButtonPrimary class="button" @click="router.push({ name: REG_PATH })">
        Pегистрация
      </VButtonPrimary>
    </div>
  </div>
</template>

<style scoped>
.wrap {
  height: 100%;
  background-image: url('/public/fon.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.button {
  font-size: 25px !important;
  padding-left: 40px !important;
  padding-right: 40px !important;
  width: 301px;
}

.title {
  font-size: 34px;
  font-weight: 700;
  text-align: center;
  padding: 0;
  margin: 0;
  margin-bottom: 15px;
}

.lead {
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  padding: 0;
  margin: 0;
  margin-bottom: 50px;
}

.button-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
