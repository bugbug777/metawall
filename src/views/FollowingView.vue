<template>
  <div
    class="overlapping | border border-2 border-dark | text-center
    font-monospace | bg-white | py-5 mb-4"
  >
    <h2 class="fs-5">追蹤名單</h2>
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
          <h3><router-link class="d-block | link-dark hover-userlink |
          fw-bold fs-6 lh-base" to="/posts/123"
              >波吉</router-link
            ></h3>
          <div class="d-flex justify-content-between">
            <p class="fs-7 text-secondary lh-14">
              追蹤時間：<time datetime="2022-2-14 12:00">2022/2/14 12:00</time>
            </p>
            <p class="fs-7 lh-14">您已追蹤 90 天！</p>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
