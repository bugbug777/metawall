<template>
  <!-- 個人資訊卡 -->
  <div class="card card-overlapping rounded-8 border-0 | bg-white | mb-8">
    <div class="d-flex">
      <div class="border rounded-start-8 border-2 border-dark" style="max-width: 80px">
        <img src="@/assets/images/user5-4@2x.png" alt="avatar" />
      </div>
      <div class="flex-grow-1 | border border-start-0 rounded-end-8 border-2 border-dark">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex flex-column">
              <h2 class="fw-bold fs-6">阿爾敏</h2>
              <p><span class="font-lato">987,987</span> 人追蹤</p>
            </div>
            <button
              type="button"
              class="btn btn-shadow-2 btn-warning | border rounded-8
              border-2 border-dark | fw-bold | px-8"
              :class="{ 'btn-gray-1': false }"
            >
              {{ `${ true ? '追蹤' : '取消追蹤'}` }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 功能列 -->
  <Searchbar />

  <!-- 動態牆 -->
  <ul>
    <li class="card card-shadow-2 | border-2 border-dark | mb-4">
      <div class="card-body | p-6 pb-2">
        <!-- 貼文內容 -->
        <div class="d-flex | mb-4">
          <img
            src="@/assets/images/user5-4.png"
            alt="avatar"
            class="image-size-45 | border rounded-circle border-2 border-dark | me-4"
          />
          <h5 class="card-title mb-0">
            <router-link class="d-block | link-dark hover-userlink | fs-6 lh-base" to="/posts/123"
              >阿爾敏</router-link
            >
            <time datetime="2022-1-10 12:00" class="d-block | fs-8 text-secondary lh-16"
              >2022/1/10 12:00</time
            >
          </h5>
        </div>
        <p class="card-text | mb-4">
          今天找到一張大海的照片<br />
          太美拉～～～
        </p>
        <img src="@/assets/images/image2@2x.png" alt="snow" class="card-img | mb-4" />
      </div>
    </li>
  </ul>
</template>

<script>
import Searchbar from '@/components/SearchbarComponent.vue';

export default {
  components: {
    Searchbar,
  },
};
</script>
