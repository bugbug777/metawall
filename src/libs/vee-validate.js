import {
  defineRule, configure,
} from 'vee-validate';
import {
  required, alpha_num, email, min,
} from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

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
