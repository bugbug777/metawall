<script>
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import userStore from '@/stores/user';
import request from '@/utils/axios';

export default {
  setup() {
    const route = useRoute();
    let userId = route.params.id;
    const user = userStore();
    const followingUser = ref({});

    // 取得 Profile
    const isFollowing = ref(false);
    const getProfile = async () => {
      try {
        const res = await request(`/users/profile/${userId}`, 'get');
        followingUser.value = res.data.user;
        isFollowing.value = res.data.user.followers.some((item) => item.user === user.id);
      } catch (error) {
        console.log(error);
      }
    };

    // newValue 有值的時候才呼叫 getProfile
    watch(() => route.params.id, (newValue) => {
      if (newValue) {
        userId = newValue;
        getProfile();
      }
    });

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

      try {
        await request(`/users/${userId}/${path}`, method);
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
        <div class="h-100 | card-body | p-3">
          <div class="h-100 | d-flex justify-content-between align-items-center">
            <div class="h-100 | d-flex flex-column justify-content-between">
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
