<script>
import { inject, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import userStore from '@/stores/user';

export default {
  setup() {
    const route = useRoute();
    const axios = inject('axios');
    const apiBase = process.env.VUE_APP_API_BASE;
    const { id } = route.params;
    const user = userStore();
    const followingUser = ref({});

    // 取得 Profile
    const isFollowing = ref(false);
    const getProfile = async () => {
      const api = `${apiBase}/users/profile/${id}`;
      try {
        const res = await axios.get(api);
        followingUser.value = res.data.user;
        isFollowing.value = res.data.user.followers.some((item) => item.user === user.id);
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(() => {
      getProfile();
    });

    // 追蹤、取消使用者
    const toggleFollowUser = async () => {
      let method = 'post';
      let path = 'follow';

      if (isFollowing.value) {
        method = 'delete';
        path = 'unfollow';
      }

      const api = `${apiBase}/users/${id}/${path}`;
      try {
        await axios[method](api);
        getProfile();
      } catch (error) {
        console.log(error);
      }
    };

    return {
      user,
      followingUser,
      isFollowing,
      toggleFollowUser,
    };
  },
};
</script>

<template>
  <!-- 個人資訊卡 -->
  <div class="card card-overlapping rounded-8 border-0 | bg-white | mb-8">
    <div class="d-flex">
      <img
        class="mw-80 border rounded-start-8 border-2 border-dark"
        :src="followingUser.avatar"
        alt="avatar"
      />
      <div class="flex-grow-1 | border border-start-0 rounded-end-8 border-2 border-dark">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex flex-column">
              <h2 class="fw-bold fs-6">{{ followingUser.name }}</h2>
              <p>
                <span class="font-lato">{{ followingUser.followers?.length }}</span> 人追蹤
              </p>
            </div>
            <button
              v-if="user.id !== followingUser._id"
              @click="toggleFollowUser"
              type="button"
              class="btn btn-shadow-2 btn-warning | border rounded-8 border-2
              border-dark | fw-bold | px-8"
              :class="{ 'btn-gray-1': isFollowing }"
            >
              {{ `${isFollowing ? '取消追蹤' : '追蹤'}` }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
