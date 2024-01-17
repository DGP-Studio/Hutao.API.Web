<template>
  <div class="floor-page">
    <div class="floor-number">{{ $route.params.floor }}</div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';

const $route = useRoute();
</script>
<style>
.floor-page {
  min-height: 100vh;
}

.floor-number {
  color: #FFF;
}
</style>