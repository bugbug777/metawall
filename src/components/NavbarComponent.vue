<template>
  <nav class="border-bottom border-3 border-dark">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center py-3">
        <h1><router-link to="/" class="font-paytone fs-26 text-dark">MetaWall</router-link></h1>
        <div class="dropdown">
          <button
            id="dLabel"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            class="d-flex align-items-center"
            data-bs-offset="0,11.25"
          >
            <img class="avatar me-2" src="@/assets/images/user.png" alt="gonsakon" />
            <span class="font-azeret fw-bold border-bottom border-2 border-dark">Member</span>
          </button>
          <ul
            class="dropdown-menu box rounded-0 text-center p-0"
            aria-labelledby="dLabel"
          >
            <li class="border border-bottom-0 border-2 border-dark bg-white hover-gray py-2">
              我的貼文牆
            </li>
            <li class="border border-bottom-0 border-2 border-dark bg-white hover-gray py-2">
              修改個人資料
            </li>
            <li class="border border-2 border-dark bg-white hover-gray py-2">登出</li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.avatar {
  width: 30px;
  height: 30px;
}
.hover-gray:hover {
  background-color: #efece7 !important;
}
.box::before {
  position: absolute;
  display: block;
  content: '';
  top: 8px;
  right: -8px;
  bottom: -8px;
  left: 8px;
  border: 2px solid #000400;
  background-color: #fff;
  z-index: -1;
}
</style>
