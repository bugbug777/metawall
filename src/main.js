import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import { required, email } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App.vue';
import router from './router';

// 建立、定義規則
defineRule('required', required);
defineRule('email', email);

// 繁體中文化設定
configure({
  generateMessage: localize({
    zh_TW: zhTW,
  }),
});
// 指定語言環境
setLocale('zh_TW');

const app = createApp(App);
app.use(router);
app.use(VueAxios, axios);
app.use(VueLoading);
app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);
app.mount('#app');
