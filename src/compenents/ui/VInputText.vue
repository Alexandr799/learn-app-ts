<script setup lang="ts">
const value = defineModel < string > ()
</script>

<template>
  <input class="input" type="text" v-model="value">
</template>

<style scoped>
.input {
  padding: 10px;
  color: var(--color-fg);
  outline: none;
  border: none;
  border-bottom: 1px solid var(--color-fg);
  background-color: inherit;
  font-size: 18px;
}

.input::placeholder {
  color: #BEC2C2;
}
</style>
