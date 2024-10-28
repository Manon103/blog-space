<template>
    <div class="article-item">
        <img class="cover" :src="article.cover" alt="" />
        <div class="content">
            <div class="date mb-12">{{ article.createTime }}</div>
            <div class="title mb-12">{{ article.title }}</div>
            <div class="description mb-24">{{ article.description }}</div>
            <div class="tags align-center">
                <span
                    v-for="item in article.tags"
                    :key="item"
                    class="tag mr-8"
                    >{{ item }}</span
                >
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Article } from '@/model/Article';

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
        }
        .description {
            color: @minor-font-color;
            font-size: 16px;
            line-height: 24px;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            display: -webkit-box;
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
