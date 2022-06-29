<template>
  <div
    class="overlapping | border border-2 border-dark | text-center
    font-monospace | bg-white | py-5 mb-4"
  >
    <h2 class="fs-5">我的按讚文章</h2>
  </div>

  <ul>
    <li class="card-shadow-2 | border rounded-8 border-2 border-dark | bg-white | p-4 mb-4">
      <div class="d-flex align-items-center">
        <img
          src="@/assets/images/user5-2.png"
          alt="headshot"
          class="image-size-40 rounded-circle | me-3"
        />
        <div class="flex-grow-1">
          <div class="d-flex justify-content-between">
            <div>
              <h3>
                <router-link
                  class="d-block | link-dark hover-userlink | fw-bold fs-6 lh-base"
                  to="/posts/user/123"
                  >波吉</router-link
                >
              </h3>
              <p class="fs-7 text-secondary lh-14">
                追蹤時間：<time datetime="2022-2-14 12:00">2022/2/14 12:00</time>
              </p>
            </div>
            <!-- 按讚、查看貼文 -->
            <div class="d-flex | me-6">
              <a class="d-flex flex-column align-items-center | me-9" href="#">
                <i class="bi bi-hand-thumbs-up | fs-5 lh-1 mb-1"></i>
                <span class="fw-bold fs-7 lh-14 text-dark">取消</span>
              </a>
              <a class="d-flex flex-column align-items-center text-dark" href="#">
                <i class="bi bi-arrow-right-circle | fs-5 lh-1 mb-1"></i>
                <span class="fw-bold fs-7 lh-14">查看</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
