<script>
import { onMounted, ref } from 'vue';
import statusStore from '@/stores/status';
import request from '@/utils/axios';
import { timeFilter, toNow } from '@/utils/dayjs';

export default {
  setup() {
    const status = statusStore();
    const followingList = ref([]);

    // 取得追蹤名單
    const getUsers = async () => {
      status.isLoading = true;
      try {
        const res = await request('/users/following', 'get');
        followingList.value = res.data.users;
        status.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(() => {
      getUsers();
    });

    return {
      followingList,
      timeFilter,
      toNow,
    };
  },
};
</script>

<template>
  <div
    class="overlapping | border border-2 border-dark | text-center
    font-monospace | bg-white | py-5 mb-4"
  >
    <h2 class="fs-5">追蹤名單</h2>
  </div>

  <ul>
    <li
      v-for="item in followingList"
      :key="item._id"
      class="card-shadow-2 | border rounded-8 border-2 border-dark | bg-white | p-4 mb-4"
    >
      <div class="d-flex align-items-center">
        <img :src="item.user.avatar" alt="headshot" class="image-size-40 rounded-circle | me-3" />
        <div class="flex-grow-1">
          <h3>
            <router-link
              class="d-block | link-dark hover-userlink | fw-bold fs-6 lh-base"
              :to="`/posts/user/${item.user._id}`"
              >{{ item.user.name }}</router-link
            >
          </h3>
          <div class="d-flex justify-content-between">
            <p class="fs-7 text-secondary lh-14">
              追蹤時間：<time :datetime="item.createdAt">{{ timeFilter(item.createdAt) }}</time>
            </p>
            <p class="fs-7 lh-14">{{ `您已追蹤 ${toNow(item.createdAt)}！` }}</p>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
