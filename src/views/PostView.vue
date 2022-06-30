<script>
import { inject, ref } from 'vue';

export default {
  setup() {
    const axios = inject('axios');
    const post = ref({
      content: 'The post is created by Sihle',
      photo:
        'https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    });
    const sendPost = () => {
      const api = 'http://localhost:3000/posts';
      axios
        .post(api, post.value)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return {
      post,
      sendPost,
    };
  },
};
</script>

<template>
  <div
    class="overlapping border border-2 border-dark text-center font-monospace bg-white py-5 mb-4"
  >
    <h2 class="fs-5">張貼動態</h2>
  </div>
  <div class="card shadow-card-2 border border-2 border-dark">
    <div class="card-body p-8">
      <form @submit.prevent="sendPost">
        <div class="mb-4">
          <label for="content" class="form-label">貼文內容</label>
          <textarea
            v-model="post.content"
            class="form-control rounded-0 border-2 border-dark px-4 py-3"
            id="content"
            rows="7"
            placeholder="輸入您的貼文內容"
          ></textarea>
        </div>
        <button type="button" class="btn btn-dark | rounded-2 | py-1 px-8 mb-4">上傳圖片</button>
        <img
          v-if="post.photo"
          :src="post.photo"
          alt="upload image"
          class="card-img rounded-8 | mb-8"
        />
        <div class="invalid-feedback | text-center | mb-4">
          圖片檔案過大，僅限 1mb 以下檔案<br />
          圖片格式錯誤，僅限 JPG、PNG 圖片
        </div>
        <div class="text-center">
          <button
            v-if="!post.content"
            type="submit"
            class="w-60 | btn btn-gray-2 | border border-2 border-dark | lh-sm | py-4"
            disabled
          >
            送出貼文
          </button>
          <button
            v-else
            type="submit"
            class="w-60 | btn btn-shadow btn-warning | border border-2 border-dark | lh-sm | py-4"
          >
            送出貼文
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
