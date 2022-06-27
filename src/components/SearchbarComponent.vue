<template>
  <div class="d-flex mb-4">
    <div class="dropdown me-3">
      <button
        class="w-156 | d-flex justify-content-between align-items-center
        | dropdown-toggle | btn btn-white | border rounded-0 border-2
        border-dark | fs-6 | py-3 px-4"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        最新貼文
      </button>
      <ul
        class="dropdown-menu | border-2 rounded-0 border-dark | text-center"
        aria-labelledby="dropdownMenuButton1"
      >
        <li class="border-bottom border-2 border-dark">
          <a class="dropdown-item" href="#">熱門貼文</a>
        </li>
        <li class="border-bottom border-2 border-dark">
          <a class="dropdown-item" href="#">最多讚</a>
        </li>
        <li><a class="dropdown-item" href="#">伊豆讚</a></li>
      </ul>
    </div>
    <div class="input-group">
      <input
        type="text"
        class="form-control | rounded-0 border-2 border-dark border-end-0 | py-3 px-4"
        placeholder="搜尋貼文"
        aria-label="搜尋貼文"
        aria-describedby="button-addon2"
      />
      <button
        class="btn btn-primary | rounded-0 border-2 border-dark | px-4"
        type="button"
        id="button-addon2"
      >
        <i class="bi bi-search fs-5"></i>
      </button>
    </div>
  </div>
</template>
