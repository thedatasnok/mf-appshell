import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@mf-appshell/ui/styles.css'

const app = createApp(App);

app.use(router);

app.mount('#app');
