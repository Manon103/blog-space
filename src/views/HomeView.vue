<script setup lang="ts">
// import BirdAnimation from '@/components/BirdAnimation.vue';
import HeaderNav from '@/components/HeaderNav.vue';
import HomeIntro from '@/components/HomeIntro.vue';
import LatestArticle from '@/components/LatestArticle.vue';
import PopularArticleList from '@/components/PopularArticleList.vue';
</script>

<template>
    <HeaderNav />
    <div class="content pb-32">
        <HomeIntro />
        <LatestArticle />
        <PopularArticleList />
    </div>
</template>

<style scoped lang="less">
.content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
