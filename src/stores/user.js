import { defineStore } from 'pinia';

export default defineStore('userStore', {
  state: () => ({
    id: '',
    name: '',
    avatar: '',
  }),
});
