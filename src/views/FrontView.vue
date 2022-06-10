<template>
  <Navbar />
  <div class="bg-gray">
    <div class="container pt-12">
      <div class="d-flex justify-content-between">
        <div style="width: 61.3%">
          <Router-view />
        </div>
        <div style="width: 35.5%">
          <Sidebar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/NavbarComponent.vue';
import Sidebar from '@/components/SidebarComponent.vue';

export default {
  components: {
    Navbar,
    Sidebar,
  },
  methods: {
    checkAuth() {
      const token = localStorage.getItem('token');
      this.$http.defaults.headers.common.Authorization = `Bearer ${token}`;

      if (!token) {
        alert('您尚未登入！');
        this.$router.push('/login');
      }
    },
  },
  created() {
    this.checkAuth();
  },
};
</script>
