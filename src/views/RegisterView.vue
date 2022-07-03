<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import request from '@/utils/axios';
import { successAlert, errorAlert } from '@/utils/sweetalert';

export default {
  setup() {
    const router = useRouter();
    const user = ref({
      name: '',
      email: '',
      password: '',
    });
    const isRegistered = ref(false);

    const register = async () => {
      try {
        await request('/users/sign_up', 'post', user.value);
        successAlert('註冊成功！').then(() => router.push('/login'));
      } catch (error) {
        if (error.response.data.message === '該電子信箱已被使用者註冊！') {
          isRegistered.value = true;
        } else {
          errorAlert();
        }
      }
    };

    return {
      user,
      register,
      isRegistered,
    };
  },
};
</script>

<template>
  <div class="container | position-absolute top-0 start-0 end-0 bottom-0 |
  d-flex justify-content-center align-items-center | px-6 px-md-0">
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
          <div class="card-body text-center | p-0">
            <h1 class="font-paytone fs-60 text-primary lh-14">MetaWall</h1>
            <h5 class="card-title fs-4 lh-sm | mb-9">註冊</h5>
            <VForm @submit="register" class="mb-4" v-slot="{ errors }">
              <div class="mb-4">
                <label for="name" class="form-label d-none"></label>
                <VField
                  name="name"
                  rules="required|min:2"
                  v-model="user.name"
                  class="form-control rounded-0 border-2 border-dark |
                  font-noto | py-2 py-md-4 px-3 px-md-6 mb-1"
                  :class="{ 'is-invalid': errors.name }"
                  id="name"
                  type="name"
                  placeholder="暱稱"
                />
                <p v-if="errors.name" class="text-start text-danger | mt-1">
                  {{ errors.name !== 'name 不能小於 2 個字元' ? '暱稱為必填欄位！' : '暱稱至少 2 個字元以上' }}
                </p>
              </div>
              <div class="mb-4">
                <label for="email" class="form-label d-none"></label>
                <VField
                  name="Email"
                  rules="required|email"
                  v-model="user.email"
                  class="form-control rounded-0 border-2 border-dark | py-2 py-md-4 px-3 px-md-6"
                  :class="{ 'is-invalid': errors.Email || isRegistered }"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
                <!-- 待新增 email 註冊驗證 API，以及實作非同步部驗證 -->
                <p v-if="isRegistered" class="text-start text-danger | mt-1">
                  帳號已被註冊，請替換新的 Email！
                </p>
                <p v-if="errors.Email" class="text-start text-danger | mt-1">
                  {{ errors.Email }}
                </p>
              </div>
              <div class="mb-8">
                <label for="password" class="form-label d-none"></label>
                <VField
                  name="password"
                  rules="required|min:8|alpha_num"
                  v-model="user.password"
                  class="form-control rounded-0 border-2 border-dark | py-2 py-md-4 px-3 px-md-6"
                  :class="{ 'is-invalid': errors.password }"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
                <p v-if="errors.password" class="text-start text-danger | mt-1">
                  密碼需至少 8 碼以上，並中英混合
                </p>
              </div>
              <button
                type="submit"
                class="w-100 | btn btn-gray-2 btn-hover-primary border rounded-8
                border-2 border-gray-4 text-white | py-2 py-md-4"
              >
                註冊
              </button>
            </VForm>
            <div class="text-center">
              <router-link to="/login" class="link-dark font-monospace">登入</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
