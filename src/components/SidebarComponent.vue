<template>
  <div class="border border-2 border-dark | bg-white | px-6 py-8">
    <router-link
      to="/post"
      class="d-block btn btn-shadow btn-primary btn-hover-warning |
      border border-2 border-dark | font-azeret fw-bold | py-4 mb-6"
      >張貼動態</router-link
    >
    <ul>
      <li class="d-flex align-items-center mb-6">
        <img class="image-size-2 | border rounded-circle border-2 border-dark
        me-4" src="@/assets/images/user5-2.png" alt="avatar" />
        <span class="fw-bold">邊緣小杰</span>
      </li>
      <li class="mb-4">
        <router-link class="d-flex align-items-center | fw-bold link-dark
        | hover-primary" to="/following">
          <i class="bi bi-bell fs-5 | d-flex justify-content-center
          align-items-center image-size-2 | border rounded-circle
          border-2 border-dark | bg-light-blue | me-4"></i>
          追蹤名單
        </router-link>
      </li>
      <li>
        <router-link class="d-flex align-items-center | fw-bold link-dark
        | hover-primary" to="/likes">
          <i class="bi bi-hand-thumbs-up fs-5 | d-flex justify-content-center
          align-items-center image-size-2 | border rounded-circle
          border-2 border-dark | bg-light-blue | me-4"></i>
          我按讚的文章
        </router-link>
      </li>
    </ul>
  </div>
</template>
