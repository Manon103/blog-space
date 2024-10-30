<template>
    <div class="tag-list align-center">
        <span
            v-for="(item, index) in tagLength"
            :key="item"
            class="tag mr-8"
            :style="tagStyles[index]"
            >{{ tagList[index] }}</span
        >
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { TagColor } from '@/constants/TagColor';

const props = defineProps<{
    tagList: string[];
}>();

const tagLength = computed(() => {
    return props.tagList.length;
});

const tagStyles = computed(() => {
    return getRandomColor();
});

const getRandomColor = () => {
    let usedIndex: number[] = [];
    return props.tagList.map(() => {
        let index: number;
        if (usedIndex.length >= TagColor.length) {
            usedIndex = [];
        }
        do {
            index = Math.floor(Math.random() * TagColor.length);
        } while (usedIndex.includes(index));
        usedIndex.push(index);
        return {
            color: TagColor[index].color,
            backgroundColor: TagColor[index].backgroundColor,
        };
    });
};
</script>

<style scoped lang="less">
.tag-list {
    .tag {
        padding: 4px 8px;
        border-radius: 16px;
        font-size: 14px;
        :last-child {
            margin-right: 0;
        }
    }
}
</style>
