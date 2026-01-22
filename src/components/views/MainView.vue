<script setup lang="ts">
import { RouterView } from 'vue-router';
import MenuList from '../MenuList.vue';

</script>
<template>
  <div class="wrap-app">
    <div class="menu">
      <MenuList />
    </div>
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.menu {
  padding-right: 30px;
}

.content {
  padding: 0 30px;
}


.wrap-app {
  max-width: 1280px;
  margin: 0 auto;
}
</style>
