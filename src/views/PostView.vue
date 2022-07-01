<script>
import { inject, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import dayjs from 'dayjs';

export default {
  setup() {
    const axios = inject('axios');
    const route = useRoute();
    const apiBase = 'http://localhost:3000';
    const post = ref([]);

    // 取得所有貼文
    const getPost = async () => {
      const { id } = route.params;
      const api = `${apiBase}/posts/${id}`;
      try {
        post.value = await axios.get(api).then((res) => res.data.post);
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(() => getPost());

    // 時間格式化
    const datetimeFormatter = (d) => dayjs(d).format('YYYY/MM/DD HH:MM');

    return {
      post,
      datetimeFormatter,
    };
  },
};
</script>

<template>
  <div class="card card-shadow-2 | rounded-8 border-2 border-dark | mb-4">
    <div class="card-body | p-6 pb-2">
      <!-- 貼文內容 -->
      <div class="d-flex | mb-4">
        <img
          :src="post.user?.avatar"
          alt="avatar"
          class="image-size-45 | border rounded-circle border-2 border-dark | me-4"
        />
        <h5 class="card-title mb-0">
          <router-link
            class="d-block | link-dark hover-userlink | fw-bold fs-6 lh-base"
            :to="`/posts/user/${post.user?._id}`"
            >{{ post.user?.name }}</router-link
          >
          <time :datetime="post.createdAt" class="d-block | fs-8 text-secondary lh-16">{{
            datetimeFormatter(post.createdAt)
          }}</time>
        </h5>
      </div>
      <p class="card-text | mb-4">
        {{ post.content }}
      </p>
      <img v-if="post.imageUrl" :src="post.imageUrl" alt="photo" class="card-img | mb-4" />
    </div>
  </div>
</template>
