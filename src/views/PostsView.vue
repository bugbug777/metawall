<script>
import Searchbar from '@/components/SearchbarComponent.vue';
import Commentbar from '@/components/CommentbarComponent.vue';
import NoPost from '@/components/NoPostComponent.vue';
import { inject, onMounted, ref } from 'vue';
import userStore from '@/stores/user';
import statusStore from '@/stores/status';
import dayjs from 'dayjs';

export default {
  components: {
    Searchbar,
    Commentbar,
    NoPost,
  },
  setup() {
    const axios = inject('axios');
    const token = localStorage.getItem('jwt');
    const status = statusStore();
    const user = userStore();
    const apiBase = process.env.VUE_APP_API_BASE;
    const posts = ref([]);
    const msg = ref('');

    // 取得所有貼文
    const getPosts = async (keyword, sort = -1) => {
      let api = '';
      api = `${apiBase}/posts?sort=${sort}`;
      if (keyword) api = `${apiBase}/posts?sort=${sort}&keyword=${keyword}`;

      status.isLoading = true;
      try {
        posts.value = await axios.get(api).then((res) => res.data.posts);
        if (!posts.value.length && keyword) msg.value = '沒有找到匹配的貼文！';
        status.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(() => {
      getPosts();
    });

    // 按讚、取消讚
    const toogleLike = async (postId, likeList) => {
      const userId = JSON.parse(atob(token.split('.')[1])).id;
      let method;
      let path;

      if (likeList.find((item) => item === userId)) {
        method = 'delete';
        path = 'unlike';
      } else {
        method = 'post';
        path = 'like';
      }
      const api = `${apiBase}/posts/${postId}/${path}`;
      try {
        await axios[method](api);
        getPosts();
      } catch (error) {
        console.log(error);
      }
    };

    // 新增留言
    const addComment = async ({ postId, content }) => {
      const api = `${apiBase}/posts/${postId}/comment`;
      try {
        await axios.post(api, { content });
        getPosts();
      } catch (error) {
        console.log(error);
      }
    };

    // 時間格式化
    const datetimeFormatter = (d) => dayjs(d).format('YYYY/MM/DD HH:MM');

    return {
      user,
      posts,
      getPosts,
      toogleLike,
      addComment,
      datetimeFormatter,
      msg,
    };
  },
};
</script>

<template>
  <!-- 功能列 -->
  <Searchbar @sort-posts="getPosts" @search-keyword="getPosts" />
  <!-- 動態牆 -->
  <ul v-if="posts.length">
    <li
      v-for="post in posts"
      :key="post._id"
      class="card card-shadow-2 | rounded-8 border-2 border-dark | mb-4"
    >
      <div class="card-body | p-6 pb-2">
        <div class="d-flex | mb-4">
          <img
            :src="post.user.avatar"
            alt="avatar"
            class="image-size-45 | border rounded-circle border-2 border-dark | me-4"
          />
          <h5 class="card-title mb-0">
            <router-link
              class="d-block | link-dark hover-userlink | fw-bold fs-6 lh-base"
              :to="`/posts/user/${post.user._id}`"
              >{{ post.user.name }}</router-link
            >
            <time :datetime="post.createdAt" class="d-block | fs-8 text-secondary lh-16">{{
              datetimeFormatter(post.createdAt)
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

        <div class="d-flex align-items-center | mb-4">
          <button @click="toogleLike(post._id, post.likes)" type="button" class="me-2">
            <i class="d-flex align-items-center bi bi-hand-thumbs-up | fs-5 text-primary"></i>
          </button>
          <span v-if="post.likes.length === 0" class="font-baloo text-secondary"
            >成為第一個按讚的朋友</span
          >
          <span v-else class="font-baloo">{{ post.likes.length }}</span>
        </div>

        <div class="d-flex align-items-center | mb-5">
          <img
            :src="user.avatar"
            alt="avatar"
            class="image-size-40 | border rounded-circle border-2 border-dark | me-2"
          />
          <Commentbar :post-id="post._id" @send-comment="addComment" />
        </div>
        <ul>
          <li
            v-for="comment in post.comments"
            :key="comment._id"
            class="card border-0 rounded-12 | bg-gray-1 bg-opacity-30 | mb-4"
          >
            <div class="card-body">
              <div class="d-flex | mb-1">
                <img
                  :src="comment.user.avatar"
                  alt="avatar"
                  class="image-size-40 | border rounded-circle border-2 border-dark me-3"
                />
                <h5 class="card-title | mb-0">
                  <router-link
                    class="d-block link-dark hover-userlink | fs-6 lh-base"
                    :to="`/posts/user/${comment.user._id}`"
                    >{{ comment.user.name }}</router-link
                  >
                  <time :datetime="comment.createdAt" class="d-block text-secondary fs-8 lh-16">{{
                    datetimeFormatter(comment.createdAt)
                  }}</time>
                </h5>
              </div>
              <p class="card-text | ms-13">{{ comment.content }}</p>
            </div>
          </li>
        </ul>
      </div>
    </li>
  </ul>
  <NoPost :msg="msg" v-else />
</template>
