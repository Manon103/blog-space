<template>
    <div class="article-item">
        <img class="cover" :src="article.cover" alt="" />
        <div class="content">
            <div class="date mb-12">{{ article.createTime }}</div>
            <div class="title mb-12">
                <span>{{ article.title }}</span>
                <img :src="ArrowUpRight" alt="" srcset="" />
            </div>
            <div class="description mb-24 ellipsis">
                {{ article.description }}
            </div>
            <TagList :tag-list="article.tags"></TagList>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Article } from '@/model/Article';
import TagList from './TagList.vue';
import ArrowUpRight from '@/assets/icons/arrow-up-right.svg';

const { article } = defineProps<{
    article: Article;
}>();
</script>

<style scoped lang="less">
@cover-height: 240px;
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
