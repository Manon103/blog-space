<script setup lang="ts">
// import BirdAnimation from '@/components/BirdAnimation.vue';
import HeaderNav from '@/components/HeaderNav.vue';
import HomeIntro from '@/components/HomeIntro.vue';
import LatestArticle from '@/components/LatestArticle.vue';
</script>

<template>
    <HeaderNav />
    <div class="content">
        <HomeIntro />
        <LatestArticle />
    </div>
</template>

<style scoped lang="less">
.content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
}
</style>
