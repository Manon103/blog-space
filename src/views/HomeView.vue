<script setup lang="ts">
import BirdAnimation from '@/components/BirdAnimation.vue';
</script>

<template>
    <main>
        <div class="header"></div>
        <div class="body">
            <BirdAnimation />
        </div>
        <div class="content"></div>
    </main>
</template>

<style scoped lang="less">
.body {
    width: 100vw;
    height: calc(100vh - 70px);
}
</style>
