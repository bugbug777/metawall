<template>
  <Navbar />
  <div class="container pt-12">
    <div class="d-flex justify-content-between">
      <div style="width: 61.3%;">
        <Searchbar />
      </div>
      <div style="width: 35.5%;"></div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/NavbarComponent.vue';
import Searchbar from '@/components/SearchBar.vue';

export default {
  components: {
    Navbar,
    Searchbar,
  },
};
</script>
