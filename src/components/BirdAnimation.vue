<script setup lang="ts">
import type { Vanta } from '@/model/Vanta';
import BIRDS from 'vanta/dist/vanta.birds.min.js';
import { onBeforeUnmount, onMounted, ref } from 'vue';

const vantaRef = ref(null);
let vantaEffect = null as unknown as Vanta;

onMounted(() => {
    vantaEffect = BIRDS({
        el: vantaRef.value,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color1: 0xffffff,
        color2: 0x25000,
        colorMode: 'lerpGradient',
        wingSpan: 21.0,
        speedLimit: 6.0,
        separation: 42.0,
        alignment: 21.0,
        quantity: 4.0,
        birdSize: 1.2,
        backgroundAlpha: 0,
    });
});

onBeforeUnmount(() => {
    vantaEffect.destroy();
});
</script>

<template>
    <div ref="vantaRef" class="vanta"></div>
</template>

<style scoped lang="less">
.vanta {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/background.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center 65%;
}
</style>
