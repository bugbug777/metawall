<template>
  <Searchbar @orderByCreatedAt="getPosts" @searchForKeyword="updatePosts" class="mb-4" />
  <ul v-if="posts.length > 0">
    <li v-for="post in posts" :key="post._id" class="card border-2 border-dark shadow-card mb-4">
      <div class="card-body p-6">
        <div class="d-flex mb-4">
          <img src="@/assets/images/user.png" alt="avatar" class="avatar rounded-circle me-4" />
          <div class="d-flex flex-column justify-content-center">
            <h2 class="fs-6">{{ post.user.name }}</h2>
            <p class="fs-12 text-secondary">{{ timeFormatter(post.createdAt) }}</p>
          </div>
        </div>
        <p class="mb-4">{{ post.content }}</p>
        <div v-if="post.photo">
          <img :src="post.photo" alt="image" />
        </div>
      </div>
    </li>
  </ul>
  <div v-else>
    <div class="card border-2 border-dark shadow-card">
      <div class="card-header border-2 border-dark bg-white p-4">
        <ul class="d-flex">
          <li class="icon rounded-circle border border-secondary bg-danger me-1"></li>
          <li class="icon rounded-circle border border-secondary bg-warning me-1"></li>
          <li class="icon rounded-circle border border-secondary bg-success"></li>
        </ul>
      </div>
      <div class="card-body p-8">
        <p class="text-center text-secondary">目前尚無動態，新增一則貼文吧！</p>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import Searchbar from '@/components/SearchBar.vue';

export default {
  components: {
    Searchbar,
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    getPosts(v) {
      const order = v === '1' ? 1 : -1;
      const api = `${process.env.VUE_APP_API_BASE}/posts?sort=${order}`;
      this.$http.get(api).then((res) => {
        if (res.data.status === 'success') {
          this.posts = res.data.data;
        }
      });
    },
    updatePosts(v) {
      const keyword = v;
      const api = `${process.env.VUE_APP_API_BASE}/posts?keyword=${keyword}`;
      this.$http.get(api).then((res) => {
        if (res.data.status === 'success') {
          this.posts = res.data.data;
        }
      });
    },
    timeFormatter(d) {
      return dayjs(d).format('YYYY/M/DD HH:mm');
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>

<style lang="scss" scoped>
.avatar {
  width: 45px;
  height: 45px;
}
.icon {
  width: 9px;
  height: 9px;
}
</style>
