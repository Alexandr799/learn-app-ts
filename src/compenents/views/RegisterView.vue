<script setup lang="ts">
import { useRouter } from 'vue-router';
import IconLogo from '../icon/IconLogo.vue';
import VButtonPrimary from '../ui/VButtonPrimary.vue';
import { AUTH_PATH } from '@/routes';
import VInputText from '../ui/VInputText.vue';
import { ref, watch } from 'vue';
import { useRegStore } from '@/stores/registrate.store';

const router = useRouter()
const storeReg = useRegStore()

const form = ref<{ username: string, email: string, password: string }>({
  username: '', email: '', password: ''
})
const loading = ref<boolean>(false)
const error = ref<null | string>(null)

async function handle() {
  const res = await storeReg.register(
    form.value.email,
    form.value.password,
    form.value.username,
  )
  form.value = { username: '', email: '', password: '' }
  if (res) {
    router.push({ name: AUTH_PATH })
  }
}

watch(() => ({
  loading: storeReg.loading,
  error: storeReg.error,
}), (data) => {
  error.value = data.error
  loading.value = data.loading
}, { immediate: true })


</script>
<template>
  <div class="wrap">
    <div class="logo-wrap">
      <div>
        <IconLogo />
      </div>
    </div>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="handle" v-if="!loading">
        <div style="padding-bottom: 20px;">
          <VInputText v-model="form.email" placeholder="Электронная почта" class="input" />
        </div>
        <div style="padding-bottom: 20px;">
          <VInputText v-model="form.username" placeholder="Имя" class="input" />
        </div>
        <div style="padding-bottom: 50px;">
          <VInputText v-model="form.password" type="password" placeholder="Пароль" class="input" />
        </div>
        <div class="button-wrap" style="padding-bottom: 20px;">
          <VButtonPrimary class="button">
            Создать аккаунт
          </VButtonPrimary>
        </div>
        <div class="button-wrap" style="padding-bottom: 20px;">
          <VButtonPrimary class="button" @click.prevent="router.push({ name: AUTH_PATH })">
            Войти в приложение
          </VButtonPrimary>
        </div>
        <div style="padding-top: 20px;" v-if="error">
          {{ error }}
        </div>
      </form>
      <div v-else>
        Идет регистрация...
      </div>
    </div>
  </div>
</template>

<style>
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
}

.input {
  width: 100%;
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

.form-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.form {
  min-width: 250px;
  max-width: 305px;
  width: 100%;
}

.button {
  width: 100%;
}
</style>
