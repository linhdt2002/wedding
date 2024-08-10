import './assets/main.css';
import router from './router';
import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';

import { createVuetify } from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

const vuetify = createVuetify();

const app = createApp(App);

app.use(router);
app.use(vuetify);

app.mount('#app');
