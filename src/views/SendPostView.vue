<script>
import { inject, ref } from 'vue';
import { useRouter } from 'vue-router';
import { successAlert, errorAlert } from '@/utils/sweetalert';

export default {
  setup() {
    const axios = inject('axios');
    const router = useRouter();
    const apiBase = process.env.VUE_APP_API_BASE;
    const post = ref({
      content: '',
      imageUrl: '',
    });

    // 送出貼文
    const sendPost = async () => {
      const api = `${apiBase}/posts`;
      try {
        await axios.post(api, post.value);
        successAlert('成功發送貼文！').then(() => {
          router.push('/posts');
        });
      } catch (error) {
        console.log(error);
      }
    };

    // 上傳圖片
    const isUploaded = ref(false);
    const isFailed = ref(false);
    const uploadImage = async (e) => {
      const api = `${apiBase}/upload`;
      const formData = new FormData();
      formData.append('image', e.target.files[0]);
      try {
        const res = await axios.post(api, formData);
        successAlert('上傳成功！');
        isUploaded.value = true;
        post.value.imageUrl = res.data.imageUrl;
      } catch (error) {
        errorAlert('上傳失敗，請重新上傳圖片！');
        isFailed.value = true;
        setTimeout(() => {
          isFailed.value = false;
        }, 5000);
      }
    };

    return {
      post,
      sendPost,
      uploadImage,
      isFailed,
      isUploaded,
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
        <label
          class="btn btn-dark | rounded-2 | py-1 px-8"
          :class="{ 'mb-4': isUploaded, 'mb-8': !isUploaded }"
          for="image"
          >上傳圖片
          <input @change="uploadImage" class="d-none" type="file" name="image" id="image" />
        </label>
        <img
          v-if="post.imageUrl"
          :src="post.imageUrl"
          alt="upload image"
          class="card-img rounded-8 | mb-8"
        />
        <div v-if="isFailed" class="text-center text-danger | mb-4">
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