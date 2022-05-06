<template>
  <Navbar />
  <div class="container pt-12">
    <div class="d-flex justify-content-between">
      <div style="width: 61.3%;">
        <Router-view />
      </div>
      <div style="width: 35.5%;"></div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/NavbarComponent.vue';

export default {
  components: {
    Navbar,
  },
};
</script>
