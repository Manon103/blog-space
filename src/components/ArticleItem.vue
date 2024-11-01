<template>
    <div :class="['article-item', displayStyle]">
        <img class="cover" :src="props.article.cover" alt="" />
        <div class="content">
            <div class="date mb-12">{{ props.article.createTime }}</div>
            <div class="title mb-12">
                <span :title="props.article.title">{{
                    props.article.title
                }}</span>
                <img :src="ArrowUpRight" alt="" srcset="" />
            </div>
            <div class="description mb-24 ellipsis">
                {{ props.article.description }}
            </div>
            <TagList :tag-list="props.article.tags"></TagList>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Article } from '@/model/Article';
import TagList from './TagList.vue';
import ArrowUpRight from '@/assets/icons/arrow-up-right.svg';

const props = withDefaults(
    defineProps<{
        article: Article;
        displayStyle?: 'vertical' | 'horizontal';
    }>(),
    {
        displayStyle: 'horizontal',
    },
);
</script>

<style scoped lang="less">
@cover-height: 240px;
.article-item.vertical {
    width: 100%;
    display: flex;
    height: 200px;
    .content {
        width: 70%;
        display: flex;
        flex-direction: column;
        .description {
            flex-grow: 1;
        }
    }

    .cover {
        width: 30%;
        height: 100%;
    }
}

.article-item {
    width: 100%;
    box-shadow: 0 0 3px #0003;
    border-radius: 4px;
    .cover {
        height: @cover-height;
        width: 100%;
        object-fit: cover;
    }
    .content {
        padding: 16px;
        .date {
            color: @purple-color;
            font-size: 14px;
            font-weight: 700;
        }
        .title {
            font-size: 26px;
            font-weight: 700;
            color: @main-font-color;
            line-height: 32px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-between;
            span {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin-right: 4px;
            }
        }
        .description {
            color: @minor-font-color;
            font-size: 16px;
            line-height: 24px;
        }
        .tags {
            .tag {
                padding: 4px 8px;
                border-radius: 12px;
                font-size: 12px;
                color: @purple-color;
                background-color: @purple-background-color;
                :last-child {
                    margin-right: 0;
                }
            }
        }
    }
}
</style>
