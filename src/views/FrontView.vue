<template>
  <Navbar />
  <div class="container pt-12">
    <div class="row justify-content-between">
      <div class="col">
        <Searchbar />
      </div>
      <div class="col"></div>
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
