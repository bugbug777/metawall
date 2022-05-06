<template>
  <Searchbar class="mb-4" />
  <ul>
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
    getPosts() {
      const api = 'http://localhost:3000/posts';
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
</style>
