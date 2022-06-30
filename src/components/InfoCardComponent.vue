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
              {{ `${true ? '追蹤' : '取消追蹤'}` }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
