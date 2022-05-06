<template>
  <div class="border border-2 border-dark bg-white px-6 py-8">
    <a
      href="#"
      class="btn btn-primary hover-effect-btn rounded-4 border border-2 border-dark
      shadow-btn w-100 py-4 mb-6"
      >張貼動態</a
    >
    <ul>
      <li class="mb-4">
        <a href="#" class="d-flex align-items-center hover-effect">
          <img src="@/assets/images/user.png" alt="" class="icon rounded-circle me-4" />
          <h2 class="fs-6 text-dark">邊緣小杰</h2>
        </a>
      </li>
      <li class="mb-4">
        <a href="#" class="d-flex align-items-center hover-effect">
          <div
            class="d-flex justify-content-center align-items-center icon border
            rounded-circle border-2 border-dark bg-info me-4"
          >
            <i class="bi bi-bell fs-4 text-dark"></i>
          </div>
          <h2 class="fs-6 text-dark">追蹤名單</h2>
        </a>
      </li>
      <li>
        <a href="#" class="d-flex align-items-center hover-effect">
          <div
            class="d-flex justify-content-center align-items-center icon border
            rounded-circle border-2 border-dark bg-info me-4"
          >
            <i class="bi bi-hand-thumbs-up fs-4 text-dark"></i>
          </div>
          <h2 class="fs-6 text-dark">我按讚的文章</h2>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.icon {
  width: 50px;
  height: 50px;
}
.hover-effect:hover {
  .icon {
    background-color: #03438D !important;
    .bi {
      color: #fff !important;
    }
  }
  h2 {
    color: #03438D !important;
  }
}
.hover-effect-btn:hover {
  background-color: #EEC32A;
  color: #000400;
}
</style>
