<script setup lang="ts">
import { useRouter } from 'vue-router';
import IconLogo from '../icon/IconLogo.vue';
import VButtonPrimary from '../ui/VButtonPrimary.vue';
import { MAIN_PATH, REG_PATH } from '@/routes';
import VInputText from '../ui/VInputText.vue';
import { onUnmounted, ref, watch } from 'vue';
import { useAuthStore } from '@/stores/auth.store';

const router = useRouter()
const storeAuth = useAuthStore()

const form = ref<{ username: string, password: string }>({
  username: '', password: ''
})
const loading = ref<boolean>(false)
const error = ref<null | string>(null)

async function handle() {
  await storeAuth.login(
        form.value.password,
    form.value.username,
  )
  form.value = { username: '', password: '' }
}

watch(() => ({
  loading: storeAuth.loading,
  error: storeAuth.error,
  getToken: storeAuth.getToken
}), (data) => {
  error.value = data.error
  loading.value = data.loading
  if (data.getToken) {
    router.push({ name: MAIN_PATH })
  }
}, { immediate: true })

onUnmounted(() => {
  storeAuth.clearError()
})

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
          <VInputText v-model="form.username" placeholder="Имя пользователя" class="input" />
        </div>
        <div style="padding-bottom: 50px;">
          <VInputText v-model="form.password" type="password" placeholder="Пароль" class="input" />
        </div>
        <div class="button-wrap" style="padding-bottom: 20px;">
          <VButtonPrimary class="button">
            Войти в приложение
          </VButtonPrimary>
        </div>
        <div class="button-wrap">
          <VButtonPrimary class="button" @click.prevent="() => router.push({ name: REG_PATH })">
            Регистрация
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
  width: 100%;
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
</style>
