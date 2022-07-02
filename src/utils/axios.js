import axios from 'axios';

const baseURL = process.env.VUE_APP_API_BASE;

const instance = axios.create({
  baseURL,
  timeout: 5000,
});

// 攔截請求，在發送前加上 token。
// 登入、註冊不需要驗證，所以不加上 token 也不影響
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwt');
    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => Promise.reject(error),
);

export default (url, method, data) => instance({
  url,
  method,
  [method.toLowerCase() === 'get' ? 'params' : 'data']: data,
});
