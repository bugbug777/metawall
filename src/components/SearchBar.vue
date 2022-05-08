<template>
  <div class="d-flex">
    <select
      @change="orderByCreatedAt"
      class="form-select rounded-0 border-2 border-dark font-azeret py-3 px-4 me-3"
      aria-label="Default select"
      style="max-width: 156px"
    >
      <option value="-1" selected>最新貼文</option>
      <option value="1">最舊貼文</option>
    </select>
    <div class="input-group">
      <input
        @keyup.enter="searchForKeyword"
        v-model="keyword"
        type="text"
        class="form-control rounded-0 border-end-0 border-2 border-dark font-azeret py-3 px-4"
        placeholder="搜尋貼文"
        aria-label="搜尋貼文"
        aria-describedby="search-button"
      />
      <button
        @click="searchForKeyword"
        class="btn btn-primary rounded-0 border-2 border-dark"
        type="button"
        id="search-button"
      >
        <i class="bi bi-search fs-5"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: '',
    };
  },
  methods: {
    orderByCreatedAt(e) {
      const sort = e.target.value;
      this.$emit('orderByCreatedAt', sort);
    },
    searchForKeyword() {
      this.$emit('searchForKeyword', this.keyword);
      this.keyword = '';
    },
  },
};
</script>
