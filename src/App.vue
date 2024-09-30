<script setup>
import { ref } from 'vue';

const isSwitched = ref(false);

const buttonTheme = ref({
  primaryBackground: 'blue',
});

const toggleTheme = ref({
  primaryBackground: 'blue',
  handleBackground: 'red'
});

const items = ref([
  { label: 'Home'},
  { label: 'Edit'}
]);

const menuTheme = ref({
  background: 'orange'
});

const amberSwitch = ref({
    handle: {
        borderRadius: '4px'
    },
    colorScheme: {
        light: {
            root: {
                checkedBackground: '{amber.500}',
                checkedHoverBackground: '{amber.600}',
                borderRadius: '4px'
            },
            handle: {
                checkedBackground: '{amber.50}',
                checkedHoverBackground: '{amber.100}'
            }
        },
        dark: {
            root: {
                checkedBackground: '{amber.400}',
                checkedHoverBackground: '{amber.300}',
                borderRadius: '4px'
            },
            handle: {
                checkedBackground: '{amber.900}',
                checkedHoverBackground: '{amber.800}'
            }
        }
    }
});
</script>

<template>
  <div class="card">
    <Button label="Click me!" size="large" :dt="buttonTheme"></Button>
    
  </div>

  <div class="card">
    <ToggleSwitch v-model="isSwitched" :dt="toggleTheme"/>
  </div>

  <div class="card">
    <Menubar :model="items" :dt="menuTheme"/>
  </div>
</template>

<style scoped></style>
