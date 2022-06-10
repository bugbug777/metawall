<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div
      class="card shadow-card rounded-0 border-2 border-dark | bg-light-gray | px-12 py-70"
      style="max-width: 869px"
    >
      <div class="row gx-12">
        <div class="col-md-6">
          <img
            src="@/assets/images/img.svg"
            class="img-fluid rounded-start h-100"
            alt="MetaWall 插圖"
          />
        </div>
        <div class="col-md-6">
          <div class="card-body text-center p-0">
            <h1 class="text-primary font-paytone fs-60 lh-14">MetaWall</h1>
            <h5 class="card-title mb-9 lh-sm">到元宇宙展開全新社交圈</h5>
            <v-form @submit="login" class="mb-4" v-slot="{ errors }">
              <div class="mb-4">
                <label for="email" class="form-label d-none"></label>
                <v-field
                  v-model="user.email"
                  type="email"
                  name="Email"
                  rules="required|email"
                  class="form-control rounded-0 border-2 border-dark"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div class="mb-8">
                <label for="password" class="form-label d-none"></label>
                <v-field
                  v-model="user.password"
                  type="password"
                  name="Password"
                  rules="required"
                  class="form-control rounded-0 border-2 border-dark"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div
                v-if="!errMsg"
                class="invalid-feedback mb-4"
                :class="{ 'd-block': errors.Email || errors.Password }"
              >
                {{ errors.Email || errors.Password }}
              </div>
              <div v-else class="invalid-feedback mb-4" :class="{ 'd-block': errMsg }">
                {{ errMsg }}
              </div>
              <button
                type="submit"
                class="btn btn-primary border border-2 border-dark shadow-btn w-100"
              >
                登入
              </button>
            </v-form>
            <div class="text-center">
              <router-link to="/register" class="link-dark font-monospace">註冊帳號</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      errMsg: '',
    };
  },
  methods: {
    login() {
      const api = `${process.env.VUE_APP_API_BASE}/users/sign_in`;
      this.$http
        .post(api, this.user)
        .then((res) => {
          if (res.data.status === 'success') {
            localStorage.setItem('token', res.data.data.token);
            this.$router.push('/');
          }
        })
        .catch((err) => {
          if (err.response.data.message === '帳號或密碼錯誤！') {
            this.errMsg = '帳號或密碼錯誤，請重新輸入！';
            this.user.password = '';
          }
        });
    },
  },
};
</script>
