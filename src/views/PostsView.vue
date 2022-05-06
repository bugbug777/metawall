<template>
  <Searchbar class="mb-4" />
  <ul>
    <li class="card border-2 border-dark shadow-card">
      <div class="card-body p-6">
        <div class="d-flex mb-4">
          <img src="@/assets/images/user.png" alt="avatar" class="avatar rounded-circle me-4" />
          <div class="d-flex flex-column justify-content-center">
            <h2 class="fs-6">邊緣小杰</h2>
            <p class="fs-12 text-secondary">2022/1/10 12:00</p>
          </div>
        </div>
        <p class="mb-4">外面看起來就超冷.... 我決定回被窩繼續睡....</p>
        <img
          src="@/assets/images/image.png"
          alt="image"
        />
      </div>
    </li>
  </ul>
</template>

<script>
import Searchbar from '@/components/SearchBar.vue';

export default {
  components: {
    Searchbar,
  },
};
</script>

<style lang="scss" scoped>
.avatar {
  width: 45px;
  height: 45px;
}
</style>
