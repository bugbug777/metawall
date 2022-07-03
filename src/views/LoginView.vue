<script>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import request from '@/utils/axios';
import { successAlert } from '../utils/sweetalert';

export default {
  setup() {
    const router = useRouter();
    const user = reactive({
      email: '',
      password: '',
    });
    const isVerified = ref(true);

    const login = async () => {
      try {
        const res = await request('/users/sign_in', 'post', user);
        localStorage.setItem('jwt', res.data.user.token);
        successAlert('登入成功！').then(() => router.push('/posts'));
      } catch (error) {
        isVerified.value = false;
        setTimeout(() => {
          isVerified.value = true;
        }, 3000);
      }
    };

    return {
      user,
      login,
      isVerified,
    };
  },
};
</script>

<template>
  <div
    class="container | position-absolute top-0 start-0 end-0 bottom-0 |
    d-flex justify-content-center align-items-center | px-6 px-md-0"
  >
    <div
      class="mw-869 | card card-shadow-1 rounded-0 border-2 border-dark |
      bg-gray-1 | px-3 px-md-6 px-lg-12 py-3 py-md-12 py-lg-70"
    >
      <div class="row gx-md-12">
        <div class="col-md-6 | d-none d-md-block">
          <img
            src="@/assets/images/img.svg"
            class="h-100 | img-fluid rounded-start"
            alt="MetaWall 插圖"
          />
        </div>
        <div class="col-md-6">
          <div class="card-body | text-center | p-0">
            <h1 class="font-paytone fs-60 text-primary lh-14">MetaWall</h1>
            <h5 class="card-title fs-md-4 lh-sm | mb-9">到元宇宙展開全新社交圈</h5>
            <VForm @submit="login" class="mb-4" v-slot="{ errors }">
              <div class="mb-4">
                <label for="email" class="form-label d-none"></label>
                <VField
                  name="Email"
                  rules="required|email"
                  v-model="user.email"
                  type="email"
                  class="form-control rounded-0 border-2 border-dark | py-2 py-md-4 px-3 px-md-6"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div class="mb-8">
                <label for="password" class="form-label d-none"></label>
                <VField
                  name="password"
                  rules="required|min:8|alpha_num"
                  v-model="user.password"
                  type="password"
                  class="form-control rounded-0 border-2 border-dark | py-2 py-md-4 px-3 px-md-6"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <p v-if="!isVerified" class="text-center text-danger | mb-4">
                帳號或密碼錯誤，請重新輸入！
              </p>
              <p v-else class="text-center text-danger | mb-4">
                {{ errors.Email || errors.password }}
              </p>
              <button
                type="submit"
                class="w-100 | btn btn-shadow btn-primary btn-hover-warning
                | border rounded-8 border-2 border-dark text-white | py-2 py-md-4"
              >
                登入
              </button>
            </VForm>
            <div class="text-center">
              <router-link to="/register" class="link-dark font-monospace">註冊帳號</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
