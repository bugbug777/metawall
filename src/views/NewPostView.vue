<template>
  <div class="position-relative box-shift mb-4">
    <h2 class="position-relative border border-2 border-dark fs-5 text-center bg-white py-4">
      張貼動態
    </h2>
  </div>
  <div class="card border-2 border-dark">
    <div class="card-body p-8">
      <form @submit.prevent="sendPost">
        <div class="mb-4">
          <label for="content" class="form-label mb-1">貼文內容</label>
          <textarea
            v-model="content"
            name="content"
            id="content"
            rows="6"
            placeholder="輸入您的貼文內容"
            class="form-control rounded-0 border-2 border-dark px-4 py-3"
          ></textarea>
        </div>
        <div class="mb-4">
          <label for="imageUrl" class="form-label mb-1">圖片網址</label>
          <input
            v-model="imageUrl"
            class="form-control border-2 border-dark px-4"
            type="text"
            name="imageUrl"
            id="imageUrl"
            placeholder="請輸入圖片網址"
          />
        </div>
        <div v-if="imageUrl">
          <img class="mb-8" :src="imageUrl" alt="image" />
        </div>
        <input
          class="d-block w-60 btn btn-gray-2 btn-hover border-2 border-dark fw-bold py-4 mx-auto"
          type="submit"
          value="送出貼文"
        />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: '6274984b957a7153849d3146',
      content: '',
      imageUrl: '',
    };
  },
  methods: {
    sendPost() {
      const api = `${process.env.VUE_APP_API_BASE}/posts`;
      const post = {
        user: '6274984b957a7153849d3146',
        content: this.content,
        photo: this.imageUrl,
      };
      this.$http
        .post(api, post)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.box-shift {
  &::before {
    display: block;
    content: '';
    position: absolute;
    top: 6px;
    right: 6px;
    bottom: -6px;
    left: -6px;
    border: 2px solid #000400;
    background-color: #fff;
    z-index: 1;
  }
  h2 {
    z-index: 2;
  }
}
.btn-hover:hover {
  background-color: #eec32a;
  box-shadow: -2px 2px 0px #000400;
}
.w-60 {
  width: 60%;
}
</style>
