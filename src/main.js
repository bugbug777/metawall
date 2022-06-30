import { createApp } from 'vue';
import { createPinia } from 'pinia';
import axios from 'axios';
import VueAxios from 'vue-axios';
import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import {
  required, alpha_num, email, min,
} from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App.vue';
import router from './router';

// 建立、定義規則
defineRule('required', required);
defineRule('alpha_num', alpha_num);
defineRule('email', email);
defineRule('min', min);

// 繁體中文化設定
configure({
  generateMessage: localize({
    zh_TW: zhTW,
  }),
});

// 指定語言環境
setLocale('zh_TW');

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
