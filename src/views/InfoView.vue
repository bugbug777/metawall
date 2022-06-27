<template>
  <div
    class="overlapping | border border-2 border-dark | text-center
    font-monospace | bg-white | py-5 mb-8"
  >
    <h2 class="fs-5">修改個人資料</h2>
  </div>

  <!-- 分頁按鈕 -->
  <ul class="nav nav-tabs ps-3" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button
        class="nav-link tab-normal | border border-bottom-0 rounded-top-8
        border-2 border-dark | px-6 active"
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
    <li class="nav-item" role="presentation">
      <button
        class="nav-link tab-normal | border border-bottom-0 rounded-top-8
        border-2 border-dark | px-6"
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
        <img class="mb-4" src="@/assets/images/user_default.png" alt="預設大頭貼" />
        <input
          class="btn btn-dark | rounded-0 | text-white | py-1 px-6"
          type="button"
          value="上傳大頭照"
        />
      </div>
      <div class="w-60 | card-body | p-0 mx-auto">
        <div class="mb-4">
          <label for="name" class="form-label mb-1">暱稱</label>
          <input
            type="text"
            class="form-control | rounded-0 border-2 border-dark | py-3 px-6"
            id="name"
            placeholder="請輸入暱稱"
            value="邊緣小傑"
          />
        </div>
        <div class="mb-8">
          <h6 class="mb-2">性別</h6>
          <div class="form-check form-check-inline">
            <input
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
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="female"
              value="female"
            />
            <label class="form-check-label" for="female">女性</label>
          </div>
        </div>
        <div class="invalid-feedback text-center fs-7 mt-0 mb-4">
          1.圖片寬高比必需為 1:1，請重新輸入<br />
          2. 解析度寬度至少 300像素以上，請重新輸入
        </div>
        <button
          class="d-block w-100 | btn btn-shadow btn-warning
          btn-hover-primary | border border-2 border-dark | py-4"
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
            type="password"
            class="form-control | rounded-0 border-2 border-dark | py-3 px-6"
            id="newPassword"
            placeholder="請輸入新密碼"
          />
        </div>
        <div class="mb-8">
          <label for="confirmPassword" class="form-label mb-1">再次輸入</label>
          <input
            type="password"
            class="form-control | rounded-0 border-2 border-dark | py-3 px-6"
            id="confirmPassword"
            placeholder="再次輸入新密碼"
          />
        </div>
        <input
          class="d-block w-100 | btn btn-gray-2 | border border-2
          border-gray-3 | text-white lh-sm | py-4"
          type="button"
          value="重設密碼"
        />
      </div>
    </div>
  </div>
</template>
