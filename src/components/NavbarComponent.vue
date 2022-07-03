<script>
import { useRouter } from 'vue-router';
import userStore from '@/stores/user';
import Swal from 'sweetalert2';

export default {
  setup() {
    const router = useRouter();
    const user = userStore();

    const logout = () => {
      localStorage.removeItem('jwt');
      Swal.fire({
        icon: 'success',
        text: '登出成功！',
        timer: 1000,
        showConfirmButton: false,
      }).then(() => {
        router.push('/login');
      });
    };

    return {
      user,
      logout,
    };
  },
};
</script>

<template>
  <nav class="border-bottom border-2 border-dark | bg-white">
    <div class="mw-869 | container">
      <div class="d-flex justify-content-between align-items-center | py-3">
        <h1>
          <router-link class="d-block font-paytone fs-26 lh-14 text-dark" to="/posts"
            >MetaWall</router-link
          >
        </h1>
        <div class="dropdown">
          <button
            id="dLabel"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            class="d-flex align-items-center"
            data-bs-offset="0, 8"
          >
            <img
              v-if="user.avatar"
              class="image-size-1 border border-2 rounded-circle border-dark | me-2"
              :src="user.avatar"
              alt="avatar"
            />
            <img
              v-else
              class="image-size-1 border border-2 rounded-circle border-dark | me-2"
              src="@/assets/images/yellow_chicken.jpeg"
              alt="avatar"
            />
            <span class="font-azeret fw-bold text-dark | border-bottom border-2 border-dark | px-1"
              >Member</span
            >
          </button>
          <ul
            class="dropdown-menu dropdown-shadow rounded-0 text-center p-0"
            aria-labelledby="dLabel"
          >
            <li class="dropdown-menu-item border border-bottom-0 border-2 border-dark">
              <router-link class="d-block link-dark py-2" :to="`/posts/user/${user.id}`"
                >我的貼文牆</router-link
              >
            </li>
            <li class="dropdown-menu-item border border-bottom-0 border-2 border-dark">
              <router-link class="d-block link-dark py-2" to="/info">修改個人資料</router-link>
            </li>
            <li class="dropdown-menu-item border border-2 border-dark">
              <a @click.prevent="logout" class="d-block link-dark py-2" href="#"> 登出 </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
