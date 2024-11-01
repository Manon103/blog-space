<template>
    <div :class="['tag-list', 'align-center', tagStyle]">
        <span
            v-for="(item, index) in tagLength"
            :key="item"
            :class="[
                'tag',
                'mr-8',
                activeTag === tagList[index] ? activeClass : '',
            ]"
            :style="tagStyle !== 'plain' && tagStyles[index]"
            @click="() => clickTag(tagList[index])"
            >{{ tagList[index] }}</span
        >
    </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { TagColor } from '@/constants/TagColor';

const emits = defineEmits(['clickTag']);
const props = defineProps<{
    tagList: string[];
    tagStyle?: 'plain' | 'normal';
    canSelected?: boolean;
    activeClass?: string;
    selectedTag?: string;
}>();

const tagLength = computed(() => {
    return props.tagList.length;
});

const tagStyles = computed(() => {
    return getRandomColor();
});

const activeTag = ref<string>('');

watch(
    () => props.selectedTag,
    val => {
        activeTag.value = val ?? '';
    },
    {
        immediate: true,
    },
);

const clickTag = (tag: string) => {
    emits('clickTag', tag);
};

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

.plain {
    .tag {
        height: 28px;
        display: inline-block;
        line-height: 26px;
        border: 1px solid #fff;
        color: #fff;
        font-size: 12px;
        border-radius: 4px;
        padding: 0 8px;
        backdrop-filter: blur(6px);
    }
}
</style>
