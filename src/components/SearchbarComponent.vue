<script>
import { ref } from 'vue';

export default {
  // eslint-disable-next-line no-unused-vars
  setup(props, { emit }) {
    const keyword = ref('');
    const workingName = ref('最新貼文');

    // 貼文排序
    const sortPosts = (sort) => {
      if (sort === -1) {
        workingName.value = '最新貼文';
      } else {
        workingName.value = '從最舊到最新';
      }
      emit('sort-posts', '', sort);
    };

    // 關鍵字搜尋貼文
    const searchPost = () => {
      emit('search-keyword', keyword.value);
      keyword.value = '';
    };

    return {
      sortPosts,
      keyword,
      searchPost,
      workingName,
    };
  },
};
</script>

<template>
  <div class="d-flex mb-4">
    <div class="dropdown me-3">
      <button
        class="w-156 | d-flex justify-content-between align-items-center |
        dropdown-toggle | btn btn-white | border rounded-0 border-2 border-dark | fs-6 | py-3 px-4"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {{ workingName }}
      </button>
      <ul
        class="dropdown-menu | border-2 rounded-0 border-dark | text-center | py-0"
        aria-labelledby="dropdownMenuButton1"
      >
        <li class="border-bottom border-2 border-dark">
          <button @click="sortPosts(-1)" type="button" class="dropdown-item | py-2" href="#">
            最新貼文
          </button>
        </li>
        <li>
          <button @click="sortPosts(1)" type="button" class="dropdown-item | py-2">
            從最舊到最新
          </button>
        </li>
      </ul>
    </div>
    <div class="input-group">
      <input
        v-model.trim="keyword"
        @keyup.enter="searchPost"
        type="text"
        class="form-control | rounded-0 border-2 border-dark border-end-0 | py-3 px-4"
        placeholder="搜尋貼文"
        aria-label="搜尋貼文"
        aria-describedby="button-addon2"
        title="對貼文內容進行搜索"
      />
      <button
        @click="searchPost"
        class="btn btn-primary | rounded-0 border-2 border-dark | px-4"
        type="button"
        id="button-addon2"
      >
        <i class="bi bi-search fs-5"></i>
      </button>
    </div>
  </div>
</template>
