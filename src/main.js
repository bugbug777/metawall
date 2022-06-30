import { createApp } from 'vue';
import { createPinia } from 'pinia';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { Form, Field, ErrorMessage } from 'vee-validate';
import '@/libs';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App.vue';
import router from './router';

const pinia = createPinia();
const app = createApp(App);

app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);
app.use(pinia);
app.use(router);
app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios);
app.mount('#app');
