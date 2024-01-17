<template>
  <!-- todo 进行页面跳转 -->
  <div class="abyss-banner-box">
    <img class="floor-bg" alt="floor-bg" src="/bg/floor-banner.webp" />
    <div class="floor-info">
      <div class="abyss-floor">
        <img alt="floor" src="/bg/floor-num-bg.webp" />
        <span>{{ props.floor }}</span>
      </div>
      <div class="abyss-info">
        <span>Some text here</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

interface AbyssBannerProps {
  floor: number
}

const props = defineProps<AbyssBannerProps>()
</script>
<style lang="css" scoped>
.abyss-banner-box {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  aspect-ratio: 3 / 8;
  width: 120px;
  cursor: pointer;
}

.floor-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  filter: brightness(0.5) grayscale(1);
}

.abyss-banner-box:hover .floor-bg {
  filter: brightness(0.8);
}

.floor-info {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 50% 0;
}

.abyss-floor {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  aspect-ratio: 1;
}

.abyss-floor img {
  position: absolute;
  width: 100%;
  height: 100%;
}

.abyss-floor span {
  position: relative;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
}

.abyss-info {
  height: 10%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.abyss-info span {
  font-size: 12px;
  font-weight: bold;
  color: #fff;
}
</style>