<template>
  <VueLoading v-model:active="status.isLoading" />
  <Navbar />
  <!-- pt-4 pt-md-12 -->
  <div class="mw-869 | container | mt-76 mt-md-110">
    <!-- 平板、桌機顯示 -->
    <div class="d-md-flex justify-content-between">
      <div class="w-md-60">
        <router-view />
      </div>
      <div class="w-md-35">
        <Sidebar />
      </div>
    </div>
  </div>
</template>

<script>
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import Swal from 'sweetalert2';

import Navbar from '@/components/NavbarComponent.vue';
import Sidebar from '@/components/SidebarComponent.vue';
import { useRouter } from 'vue-router';
import userStore from '@/stores/user';
import statusStore from '@/stores/status';
import request from '@/utils/axios';

export default {
  components: {
    Navbar,
    Sidebar,
    VueLoading,
  },
  setup() {
    const router = useRouter();
    const status = statusStore();

    // 驗證後，取得 user 暱稱、大頭貼、_id 方便其他頁面使用
    const user = userStore();
    const checkAuth = async () => {
      try {
        const res = await request('/users/check', 'get');
        const { _id, name, avatar } = res.data.user;
        user.id = _id;
        user.name = name;
        user.avatar = avatar;
        router.push('/posts');
      } catch (error) {
        if (!error.response.data.status) {
          Swal.fire({
            icon: 'error',
            text: '您尚未登入！',
            timer: 1500,
            showConfirmButton: false,
          }).then(() => {
            router.push('/login');
          });
        }
      }
    };
    checkAuth();

    return {
      user,
      status,
    };
  },
};
</script>
