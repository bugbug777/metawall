<template>
  <Navbar />

  <div class="mw-869 | container | pt-12">
    <div class="d-flex justify-content-between">
      <div style="width: 61.3%">
        <router-view />
      </div>
      <div style="width: 35.5%">
        <Sidebar />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/NavbarComponent.vue';
import Sidebar from '@/components/SidebarComponent.vue';
import { inject } from 'vue';
import { useRouter } from 'vue-router';
import userStore from '@/stores/user';
import Swal from 'sweetalert2';

export default {
  components: {
    Navbar,
    Sidebar,
  },
  setup() {
    const router = useRouter();
    const axios = inject('axios');
    const token = localStorage.getItem('jwt');
    if (!token) router.push('/login');
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    // 驗證後，取得 user 暱稱、大頭貼、_id 方便其他頁面使用
    const user = userStore();

    const checkAuth = () => {
      const api = 'http://localhost:3000/users/check';
      axios
        .get(api)
        .then((res) => {
          if (res.data.status) {
            const { _id, name, avatar } = res.data.user;
            user.id = _id;
            user.name = name;
            user.avatar = avatar;
          }
        })
        .catch((err) => {
          if (!err.response.data.status) {
            Swal.fire({
              icon: 'error',
              text: '您尚未登入！',
              timer: 1500,
              showConfirmButton: false,
            }).then(() => {
              router.push('/login');
            });
          }
        });
    };
    checkAuth();

    return {
      user,
    };
  },
};
</script>
