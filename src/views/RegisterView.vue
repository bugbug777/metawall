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
            <form @submit.prevent="" class="mb-4">
              <div class="mb-4">
                <label for="name" class="form-label d-none"></label>
                <input
                  class="form-control rounded-0 border-2 border-dark |
                  font-noto lh-sm | py-4 px-6 mb-1"
                  id="name"
                  type="name"
                  placeholder="暱稱"
                />
                <div class="invalid-feedback text-start">暱稱至少 2 個字元以上</div>
              </div>
              <div class="mb-4">
                <label for="email" class="form-label d-none"></label>
                <input
                  class="form-control rounded-0 border-2 border-dark |
                  lh-sm | py-4 px-6"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
                <div class="invalid-feedback text-start">帳號已被註冊，請替換新的 Email！</div>
              </div>
              <div class="mb-8">
                <label for="password" class="form-label d-none"></label>
                <input
                  class="form-control rounded-0 border-2 border-dark lh-sm py-4 px-6"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
                <div class="invalid-feedback text-start">密碼需至少 8 碼以上，並中英混合</div>
              </div>
              <button
                type="submit"
                class="w-100 | btn bg-gray-2 border rounded-8 border-2
                border-gray-4 text-white | py-4"
              >
                <!-- 前端資料驗證完成時，是要統一使用 button 的效果，還是將文字切換成登入就好？ -->
                {{ `${true ? '註冊' : '登入'}` }}
              </button>
            </form>
            <div class="text-center">
              <router-link to="/login" class="link-dark font-monospace">登入</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
