<script setup lang="ts">
import BirdAnimation from '@/components/BirdAnimation.vue';
import VHeader from '@/components/Header.vue';
</script>

<template>
    <main>
        <VHeader />
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
