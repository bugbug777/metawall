import { defineStore } from 'pinia';

export default defineStore('userStore', {
  state: () => ({
    _id: '',
    name: '',
    avatar: '',
  }),
});
