<script>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import statusStore from '@/stores/status';
import request from '@/utils/axios';
import { timeFilter } from '@/utils/dayjs';

export default {
  setup() {
    const route = useRoute();
    const status = statusStore();
    const post = ref([]);

    // 取得所有貼文
    const getPost = async () => {
      const { id } = route.params;
      status.isLoading = true;
      try {
        const res = await request(`/posts/${id}`, 'get');
        post.value = res.data.post;
        status.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(() => getPost());

    return {
      post,
      timeFilter,
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
            timeFilter(post.createdAt)
          }}</time>
        </h5>
      </div>
      <p class="card-text | mb-4">
        {{ post.content }}
      </p>
      <div v-if="post.imageUrl" class="ratio ratio-16x9 | mb-4">
          <img
            :src="post.imageUrl"
            alt="photo"
            class="image-control | border rounded-8 border-2 border-dark"
          />
        </div>
    </div>
  </div>
</template>
