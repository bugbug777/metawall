<script>
import { inject, onMounted, ref } from 'vue';
import dayjs from 'dayjs';

export default {
  setup() {
    const axios = inject('axios');
    const apiBase = process.env.VUE_APP_API_BASE;
    const posts = ref([]);

    // 取得所有按讚貼文
    const getLikePosts = async () => {
      const api = `${apiBase}/users/getLikeList`;
      posts.value = await axios.get(api).then((res) => res.data.posts);
    };
    const datetimeFormatter = (d) => dayjs(d).format('YYYY/MM/DD HH:MM');
    onMounted(() => {
      getLikePosts();
    });

    // 取消讚
    const cancelLike = async (postId) => {
      const api = `${apiBase}/posts/${postId}/unlike`;
      try {
        await axios.delete(api);
        getLikePosts();
      } catch (error) {
        console.log(error);
      }
    };

    return {
      posts,
      datetimeFormatter,
      cancelLike,
    };
  },
};
</script>

<template>
  <div
    class="overlapping | border border-2 border-dark | text-center font-monospace |
    bg-white | py-5 mb-4"
  >
    <h2 class="fs-5">我的按讚文章</h2>
  </div>

  <ul>
    <li
      v-for="post in posts"
      :key="post._id"
      class="card-shadow-2 | border rounded-8 border-2 border-dark | bg-white | p-4 mb-4"
    >
      <div class="d-flex align-items-center">
        <img :src="post.user.avatar" alt="avatar" class="image-size-40 rounded-circle | me-3" />
        <div class="flex-grow-1">
          <div class="d-flex justify-content-between">
            <div>
              <h3>
                <router-link
                  class="d-block | link-dark hover-userlink | fw-bold fs-6 lh-base"
                  :to="`/posts/user/${post.user._id}`"
                  >{{ post.user.name }}</router-link
                >
              </h3>
              <p class="fs-7 text-secondary lh-14">
                發文時間：<time :datetime="post.createdAt">{{
                  datetimeFormatter(post.createdAt)
                }}</time>
              </p>
            </div>
            <!-- 按讚、查看貼文 -->
            <div class="d-flex | me-6">
              <button
                @click="cancelLike(post._id)"
                class="d-flex flex-column align-items-center | me-9"
                type="button"
              >
                <i class="bi bi-hand-thumbs-up | fs-5 lh-1 mb-1"></i>
                <span class="fw-bold fs-7 lh-14 text-dark">取消</span>
              </button>
              <router-link :to="`/posts/${post._id}`" class="d-flex flex-column
              align-items-center text-dark">
                <i class="bi bi-arrow-right-circle | fs-5 lh-1 mb-1"></i>
                <span class="fw-bold fs-7 lh-14">查看</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
