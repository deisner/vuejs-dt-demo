<script setup>
import { ref } from 'vue';

const buttonTheme = ref({
  primaryBackground: 'blue',
});

</script>

<template>
  <div class="card">
    <Button label="Click me!" size="large" :dt="buttonTheme"></Button>
  </div>
</template>

<style scoped></style>
