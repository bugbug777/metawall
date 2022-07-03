<script>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import userStore from '@/stores/user';
import statusStore from '@/stores/status';
import request from '@/utils/axios';
import { successAlert, errorAlert } from '@/utils/sweetalert';

export default {
  setup() {
    const router = useRouter();
    const globalUserState = userStore();
    const status = statusStore();
    const user = ref({});

    // 取得個人資料
    const getProfile = async () => {
      status.isLoading = true;
      try {
        const res = await request('/users/profile', 'get');
        user.value = res.data.user;
        status.isLoading = false;
      } catch (error) {
        errorAlert();
      }
    };
    onMounted(() => {
      getProfile();
    });

    // 上傳大頭貼
    const isFailed = ref(false);
    const uploadImage = async (e) => {
      const formData = new FormData();
      formData.append('image', e.target.files[0]);
      try {
        const res = await request('/upload?type="avatar"', 'post', formData);
        successAlert('上傳成功！');
        user.value.avatar = res.data.imageUrl;
      } catch (error) {
        errorAlert('上傳失敗，請重新上傳圖片！');
        isFailed.value = true;
      }
    };

    // 更新個人資料
    const updateProfile = async () => {
      try {
        const res = await request('/users/profile', 'patch', user.value);
        globalUserState.name = res.data.user.name;
        globalUserState.avatar = res.data.user.avatar;
        successAlert('個人資料更新成功！').then(() => getProfile());
      } catch (error) {
        errorAlert();
      }
    };

    // 重設密碼
    const userPassword = ref({
      password: '',
      confirmedPassword: '',
    });
    const updatePassword = async () => {
      try {
        await request('/users/updatePassword', 'post', userPassword.value);
        successAlert('密碼重設成功，請重新登入！').then(() => {
          localStorage.removeItem('jwt');
          router.push('/login');
        });
      } catch (error) {
        errorAlert('密碼前後不一致！');
      }
    };

    return {
      user,
      getProfile,
      uploadImage,
      isFailed,
      updateProfile,
      updatePassword,
      userPassword,
    };
  },
};
</script>

<template>
  <div
    class="overlapping | border border-2 border-dark | text-center font-monospace |
    bg-white | py-5 mb-8"
  >
    <h2 class="fs-5">修改個人資料</h2>
  </div>

  <!-- 分頁按鈕 -->
  <ul class="nav nav-tabs ps-3" id="myTab" role="tablist">
    <li class="nav-item | bg-white" role="presentation">
      <button
        class="nav-link link-dark | border border-bottom-0 rounded-top-8 border-2
        border-dark | px-6 active"
        id="profile-tab"
        data-bs-toggle="tab"
        data-bs-target="#profile"
        type="button"
        role="tab"
        aria-controls="profile"
        aria-selected="true"
      >
        暱稱修改
      </button>
    </li>
    <li class="nav-item | bg-white" role="presentation">
      <button
        class="nav-link link-dark | border border-bottom-0 rounded-top-8 border-2
        border-dark | px-6"
        id="password-tab"
        data-bs-toggle="tab"
        data-bs-target="#password"
        type="button"
        role="tab"
        aria-controls="password"
        aria-selected="false"
      >
        重設密碼
      </button>
    </li>
  </ul>

  <!-- 分頁內容 -->
  <div class="tab-content | card card-shadow-2 border border-2 border-dark p-8" id="myTabContent">
    <!-- 暱稱修改 -->
    <div
      class="tab-pane fade show active"
      id="profile"
      role="tabpanel"
      aria-labelledby="profile-tab"
    >
      <div class="d-flex flex-column align-items-center mb-3">
        <div class="mw-107 ratio ratio-1x1 | mb-4">
          <img class="border rounded-circle border-2 border-dark" :src="user.avatar" alt="預設大頭貼" />
        </div>

        <label
          class="btn btn-dark | rounded-0 | text-white | py-1 px-6 mb-3"
          for="image"
          >上傳大頭照
          <input @change="uploadImage" class="d-none" type="file" name="image" id="image" />
        </label>
      </div>
      <div class="w-60 | card-body | p-0 mx-auto">
        <div class="mb-4">
          <label for="name" class="form-label mb-1">暱稱</label>
          <input
            v-model="user.name"
            type="text"
            class="form-control | rounded-0 border-2 border-dark | py-3 px-6"
            id="name"
            placeholder="請輸入暱稱"
          />
        </div>
        <div class="mb-8">
          <h6 class="mb-2">性別</h6>
          <div class="form-check form-check-inline">
            <input
              v-model="user.gender"
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="male"
              value="male"
              checked
            />
            <label class="form-check-label" for="male">男性</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              v-model="user.gender"
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="female"
              value="female"
            />
            <label class="form-check-label" for="female">女性</label>
          </div>
        </div>
        <div v-if="isFailed" class="text-center text-danger | fs-7 | mt-0 mb-4">
          1.圖片寬高比必需為 1:1，請重新輸入<br />
          2. 解析度寬度至少 300像素以上，請重新輸入
        </div>
        <button
          @click="updateProfile"
          class="d-block w-100 | btn btn-shadow btn-warning btn-hover-primary | border
          border-2 border-dark | py-4"
          type="button"
        >
          送出更新
        </button>
      </div>
    </div>

    <!-- 重設密碼 -->
    <div class="tab-pane fade" id="password" role="tabpanel" aria-labelledby="password-tab">
      <div class="w-60 | card-body | p-0 mx-auto">
        <div class="mb-4">
          <label for="newPassword" class="form-label mb-1">輸入新密碼</label>
          <input
            v-model="userPassword.password"
            type="password"
            class="form-control | rounded-0 border-2 border-dark | py-3 px-6"
            id="newPassword"
            placeholder="請輸入新密碼"
          />
        </div>
        <div class="mb-8">
          <label for="confirmPassword" class="form-label mb-1">再次輸入</label>
          <input
            v-model="userPassword.confirmedPassword"
            type="password"
            class="form-control | rounded-0 border-2 border-dark | py-3 px-6"
            id="confirmPassword"
            placeholder="再次輸入新密碼"
          />
        </div>
        <input
          @click="updatePassword"
          class="d-block w-100 | btn btn-gray-2 | border border-2 border-gray-3 |
          text-white lh-sm | py-4"
          type="button"
          value="重設密碼"
        />
      </div>
    </div>
  </div>
</template>
