import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Form, Field, ErrorMessage } from 'vee-validate';
import '@/configs';
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
app.mount('#app');
