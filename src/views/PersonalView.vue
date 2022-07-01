<script>
import {
  inject, ref, onMounted,
} from 'vue';
import { useRoute } from 'vue-router';
import Searchbar from '@/components/SearchbarComponent.vue';
import InfoCard from '@/components/InfoCardComponent.vue';
import dayjs from 'dayjs';

export default {
  components: {
    InfoCard,
    Searchbar,
  },
  setup() {
    const axios = inject('axios');
    const apiBase = process.env.VUE_APP_API_BASE;
    const posts = ref([]);
    const route = useRoute();
    const { id } = route.params;

    const getPosts = () => {
      const api = `${apiBase}/posts/user/${id}`;
      axios
        .get(api)
        .then((res) => {
          if (res.data.status) {
            posts.value = res.data.posts;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    onMounted(() => {
      getPosts();
    });

    // 時間格式化
    const datetimeFormatter = (d) => dayjs(d).format('YYYY/MM/DD HH:MM');

    return {
      posts,
      datetimeFormatter,
    };
  },
};
</script>

<template>
  <!-- 個人資訊卡 -->
  <InfoCard />
  <!-- 功能列 -->
  <Searchbar />

  <!-- 動態牆 -->
  <ul>
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
            <time :datetime="post.createdAt" class="d-block | fs-8 text-secondary lh-16"
              >{{ datetimeFormatter(post.createdAt) }}</time
            >
          </h5>
        </div>
        <p class="card-text | mb-4">
          {{ post.content }}
        </p>
        <img v-if="post.imageUrl" :src="post.imageUrl" alt="photo" class="card-img | mb-4" />
      </div>
    </li>
  </ul>
</template>
