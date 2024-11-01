<template>
    <span class="tag mr-8" :style="props.tagStyle">{{ props.tag }}</span>
</template>

<script setup lang="ts">
const props = defineProps<{
    tag: string;
    tagStyle?: string;
}>();
</script>

<style scoped></style>
