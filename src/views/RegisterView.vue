<script>
import { reactive, inject } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const axios = inject('axios');
    const router = useRouter();
    const user = reactive({
      name: 'sihle',
      email: 'gubug777@gmail.com',
      password: 'qwe12345',
    });

    const register = () => {
      const api = 'http://localhost:3000/users/sign_up';
      axios
        .post(api, user)
        .then((res) => {
          if (res.data.status) {
            router.push('/posts');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return {
      user,
      register,
    };
  },
};
</script>

<template>
  <div class="vh-100 | container | d-flex justify-content-center align-items-center">
    <div
      class="mw-869 | card card-shadow-1 rounded-0 border-2 border-dark | bg-gray-1 | px-12 py-70"
    >
      <div class="row gx-12">
        <div class="col-md-6">
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
                  class="form-control rounded-0 border-2 border-dark | font-noto | py-4 px-6 mb-1"
                  id="name"
                  type="name"
                  placeholder="暱稱"
                />
                <!-- <ErrorMessage name="name" /> -->
                <p v-if="errors.name" class="text-start text-danger">暱稱至少 2 個字元以上</p>
              </div>
              <div class="mb-4">
                <label for="email" class="form-label d-none"></label>
                <VField
                  name="email"
                  rules="required|email"
                  v-model="user.email"
                  class="form-control rounded-0 border-2 border-dark | py-4 px-6"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
                <!-- 待新增 email 註冊驗證 API，以及實作非同步部驗證 -->
                <p v-if="errors.email" class="text-start text-danger">
                  帳號已被註冊，請替換新的 Email！
                </p>
              </div>
              <div class="mb-8">
                <label for="password" class="form-label d-none"></label>
                <VField
                  name="password"
                  rules="required|min:8|alpha_num"
                  v-model="user.password"
                  class="form-control rounded-0 border-2 border-dark py-4 px-6"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
                <p v-if="errors.password" class="text-start text-danger">
                  密碼需至少 8 碼以上，並中英混合
                </p>
              </div>
              <button
                type="submit"
                class="w-100 | btn bg-gray-2 border rounded-8 border-2
                border-gray-4 text-white | py-4"
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
