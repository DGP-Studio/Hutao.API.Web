<template>
  <!-- todo 考虑添加按照数据类型查看 -->
  <div class="index-page">
    <div class="index-header">
      <img src="/logo-512.webp" alt="logo" />
      <span>Welcome to Hutao Web!</span>
    </div>
    <!-- todo 这里搞个 layout -->
    <div class="floor-banner">
      <AbyssBanner v-for="(floor, index) in floors" :key="index" :floor="floor" />
    </div>
  </div>
</template>
<script setup lang="ts">
import AbyssBanner from '~/components/AbyssBanner.vue'

const floors = [9, 10, 11, 12]
</script>
<style lang="css" scoped>
.index-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #0D0E1E; /* todo 这部分做成渐变色 */
}

.index-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
}

.index-header img {
  width: 100px;
  aspect-ratio: 1;
}

.index-header span {
  font-size: 3rem;
  color: #fff;
}

.floor-banner {
  width: 100%;
  max-width: 1140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
