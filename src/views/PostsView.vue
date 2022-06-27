<template>
  <!-- 功能列 -->
  <Searchbar />
  <!-- 動態牆 -->
  <ul>
    <li class="card card-shadow-2 | border-2 border-dark | mb-4">
      <div class="card-body | p-6 pb-2">
        <!-- 貼文內容 -->
        <div class="d-flex | mb-4">
          <img
            src="@/assets/images/user.png"
            alt="avatar"
            class="image-size-45 | border rounded-circle border-2 border-dark | me-4"
          />
          <h5 class="card-title mb-0">
            <router-link class="d-block | link-dark hover-userlink | fs-6 lh-base" to="/posts/123"
              >邊緣小杰</router-link
            >
            <time datetime="2022-1-10 12:00" class="d-block | fs-8 text-secondary lh-16"
              >2022/1/10 12:00</time
            >
          </h5>
        </div>
        <p class="card-text | mb-4">
          外面看起來就超冷....<br />
          我決定回被窩繼續睡....&gt;.&lt;
        </p>
        <img src="@/assets/images/image@2x.png" alt="snow" class="card-img | mb-4" />

        <!-- 按讚數 -->
        <div class="d-flex align-items-center | mb-4">
          <i class="bi bi-hand-thumbs-up text-primary | me-2"></i>
          <span class="font-baloo text-secondary">成為第一個按讚的朋友</span>
          <!-- <span class="font-baloo">12</span> -->
        </div>

        <!-- 留言區 -->
        <div class="d-flex align-items-center | mb-5">
          <img
            src="@/assets/images/user.png"
            alt="avatar"
            class="image-size-40 | border rounded-circle border-2 border-dark | me-2"
          />
          <div class="input-group">
            <input
              type="text"
              class="form-control | rounded-0 border-2 border-dark border-end-0 | py-2 px-4"
              placeholder="留言..."
              aria-label="留言"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-primary btn-hover-warning | rounded-0 border-2 border-dark | px-12"
              type="button"
              id="button-addon2"
            >
              留言
            </button>
          </div>
        </div>
        <ul>
          <li class="card border-0 | bg-gray-1 bg-opacity-30 | mb-4">
            <div class="card-body">
              <div class="d-flex | mb-1">
                <img
                  src="@/assets/images/user5.png"
                  alt="avatar"
                  class="image-size-40 | border rounded-circle border-2 border-dark me-3"
                />
                <h5 class="card-title | mb-0">
                  <a class="d-block link-dark hover-userlink | fs-6 lh-base" href="#">希琳</a>
                  <time datetime="2022-1-11 10:00" class="d-block text-secondary fs-8 lh-16"
                    >2022/1/11 10:00</time
                  >
                </h5>
              </div>
              <p class="card-text | ms-13">真的～我已經準備冬眠了</p>
            </div>
          </li>
          <li class="card border-0 | bg-gray-1 bg-opacity-30 | mb-4">
            <div class="card-body">
              <div class="d-flex | mb-1">
                <img
                  src="@/assets/images/user5-2.png"
                  alt="avatar"
                  class="image-size-40 | border rounded-circle border-2 border-dark | me-3"
                />
                <h5 class="card-title | mb-0">
                  <a class="d-block | link-dark hover-userlink | fs-6 lh-base" href="#">波吉</a>
                  <time datetime="2022-1-11 10:00" class="d-block | fs-8 text-secondary lh-16"
                    >2022/1/11 10:00</time
                  >
                </h5>
              </div>
              <p class="card-text | ms-13">會嗎？我沒穿衣服都不覺得冷</p>
            </div>
          </li>
        </ul>
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
