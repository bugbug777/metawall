<script>
import userStore from '@/stores/user';
import statusStore from '@/stores/status';

export default {
  setup() {
    const user = userStore();
    const status = statusStore();

    return {
      user,
      status,
    };
  },
};
</script>
<template>
  <!-- 桌機、平板顯示 -->
  <div class="d-none d-md-block | border border-2 border-dark | bg-white | px-6 py-8">
    <router-link
      to="/post"
      class="d-block btn btn-shadow btn-primary btn-hover-warning | border
      border-2 border-dark | font-azeret fw-bold | py-4 mb-6"
      >張貼動態</router-link
    >
    <ul>
      <li class="d-flex align-items-center mb-6">
        <img
          v-if="user.avatar"
          class="image-size-2 | border rounded-circle border-2 border-dark me-4"
          :src="user.avatar"
          alt="avatar"
        />
        <img
            v-else
            class="image-size-2 | border rounded-circle border-2 border-dark me-4"
            src="@/assets/images/yellow_chicken.jpeg"
            alt="avatar"
          />
        <span class="fw-bold">{{ user.name || 'Pikabu' }}</span>
      </li>
      <li class="mb-4">
        <router-link
          class="d-flex align-items-center | fw-bold link-dark | hover-primary"
          to="/following"
        >
          <i
            class="bi bi-bell fs-5 | d-flex justify-content-center
            align-items-center image-size-2 | border rounded-circle border-2
            border-dark | bg-light-blue | me-4"
          ></i>
          追蹤名單
        </router-link>
      </li>
      <li>
        <router-link
          class="d-flex align-items-center | fw-bold link-dark | hover-primary"
          to="/likes"
        >
          <i
            class="bi bi-hand-thumbs-up fs-5 | d-flex justify-content-center
            align-items-center image-size-2 | border rounded-circle border-2
            border-dark | bg-light-blue | me-4"
          ></i>
          我按讚的文章
        </router-link>
      </li>
    </ul>
  </div>
  <!-- 手機版顯示 -->
  <div class="d-md-none fixed-bottom bottom-5 | mx-1"
  :class="{ 'hideSidebar':  status.hideSidebar}">
    <ul class="d-flex justify-content-between justify-content-sm-evenly | border rounded-32 border-3
    border-dark bg-gray-1 | py-2 px-12">
      <li>
        <router-link class="link-dark" to="/posts">
          <i
            class="d-flex justify-content-center align-items-center |
            bi bi-house-door fs-4 | image-size-2 | border
            rounded-circle border-3 border-dark | bg-white"
          ></i>
        </router-link>
      </li>
      <li>
        <router-link class="link-dark" to="/following">
          <i
            class="d-flex justify-content-center align-items-center |
            bi bi-bell fs-4 | image-size-2 | border
            rounded-circle border-3 border-dark | bg-white"
          ></i>
        </router-link>
      </li>
      <li>
        <router-link class="link-dark" to="/likes">
          <i
            class="d-flex justify-content-center align-items-center |
            bi bi-hand-thumbs-up fs-4 | image-size-2 | border
            rounded-circle border-3 border-dark | bg-white"
          ></i>
        </router-link>
      </li>
      <li>
        <router-link class="link-white" to="/post">
          <i
            class="d-flex justify-content-center align-items-center |
            bi bi-plus fs-4 | image-size-2 | border
            rounded-circle border-3 border-dark | bg-primary"
          ></i>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.hideSidebar {
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
}
</style>
