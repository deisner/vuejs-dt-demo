import { createApp } from 'vue';
import './style.css';

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import App from './App.vue';

import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import ToggleSwitch from 'primevue/toggleswitch';


const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: '.p-dark',
      cssLayer: false,
    },
  },
});

app.component('Button', Button);
app.component('Menubar', Menubar);
app.component('ToggleSwitch', ToggleSwitch);

app.mount('#app');
