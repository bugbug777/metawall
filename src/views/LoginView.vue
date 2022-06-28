<script>
import { inject, ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';

export default {
  setup() {
    const axios = inject('axios');
    const router = useRouter();
    const user = reactive({
      email: '',
      password: '',
    });
    const isVerified = ref(true);

    const login = () => {
      const api = 'http://localhost:3000/users/sign_in';
      axios
        .post(api, user)
        .then((res) => {
          if (res.data.status) {
            localStorage.setItem('jwt', res.data.user.token);
            Swal.fire({
              icon: 'success',
              text: '登入成功！',
              timer: 1000,
              showConfirmButton: false,
            }).then(() => {
              router.push('/posts');
            });
          }
        })
        .catch((err) => {
          if (!err.response.data.status) {
            isVerified.value = false;
            setTimeout(() => {
              isVerified.value = true;
            }, 3000);
          }
        });
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
          <div class="card-body | text-center | p-0">
            <h1 class="font-paytone fs-60 text-primary lh-14">MetaWall</h1>
            <h5 class="card-title fs-4 lh-sm | mb-9">到元宇宙展開全新社交圈</h5>
            <VForm @submit="login" class="mb-4" v-slot="{ errors }">
              <div class="mb-4">
                <label for="email" class="form-label d-none"></label>
                <VField
                  name="Email"
                  rules="required|email"
                  v-model="user.email"
                  type="email"
                  class="form-control rounded-0 border-2 border-dark | py-4 px-6"
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
                  class="form-control rounded-0 border-2 border-dark | py-4 px-6"
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
                class="w-100 | btn btn-shadow btn-primary
                btn-hover-warning | border rounded-8 border-2 border-dark text-white | py-4"
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
