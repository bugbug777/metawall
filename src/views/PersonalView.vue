<script>
import InfoCard from '@/components/InfoCardComponent.vue';
import Searchbar from '@/components/SearchbarComponent.vue';
import NoPost from '@/components/NoPostComponent.vue';

import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import statusStore from '@/stores/status';
import request from '@/utils/axios';
import { timeFilter } from '@/utils/dayjs';

export default {
  components: {
    InfoCard,
    Searchbar,
    NoPost,
  },
  setup() {
    const status = statusStore();
    const posts = ref([]);
    const route = useRoute();
    let userId = route.params.id;

    const getPosts = async () => {
      status.isLoading = true;
      try {
        const res = await request(`/posts/user/${userId}`, 'get');
        posts.value = res.data.posts;
        status.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    };

    // newValue 有值的時候才呼叫 getPosts
    watch(() => route.params.id, (newValue) => {
      if (newValue) {
        userId = newValue;
        getPosts();
      }
    });

    onMounted(() => {
      getPosts();
    });

    return {
      posts,
      getPosts,
      timeFilter,
    };
  },
};
</script>

<template>
  <!-- 個人資訊卡 -->
  <InfoCard />
  <!-- 功能列 -->
  <Searchbar @sort-posts="getPosts" @search-keyword="getPosts" />

  <!-- 動態牆 -->
  <ul v-if="posts.length">
    <li
      v-for="post in posts"
      :key="post._id"
      class="card card-shadow-2 | border-2 border-dark | mb-4"
    >
      <div class="card-body | p-6 pb-2">
        <!-- 貼文內容 -->
        <div class="d-flex | mb-4">
          <img
            :src="post.user.avatar"
            alt="avatar"
            class="image-size-45 | border rounded-circle border-2 border-dark | me-4"
          />
          <h5 class="card-title mb-0">
            <router-link
              class="d-block | link-dark hover-userlink | fs-6 lh-base"
              :to="`/posts/user/${post.user._id}`"
              >{{ post.user.name }}</router-link
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
    </li>
  </ul>
  <NoPost v-else />
</template>
