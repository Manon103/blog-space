<template>
    <div class="popular-article mt-32 mb-32">
        <div class="title mb-32">推荐文章</div>
        <div class="article-list">
            <ArticleItem
                v-for="item in articleList.values()"
                :key="item.title"
                :article="item"
                @click="() => jumpToArticleDetail(item)"
                class="article-item mb-24"
            />
        </div>
        <div class="more align-center">
            全部文章
            <img class="ml-8" src="@/assets/icons/arrow-right.svg" alt="" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Article } from '@/model/Article';
import { ref } from 'vue';
import ArticleItem from './ArticleItem.vue';
import { useRouter } from 'vue-router';
import articleMap from '@/assets/articles/articleMap';

const articleList = ref(articleMap);

const router = useRouter();

const jumpToArticleDetail = (article: Article) => {
    router.push({ name: 'article', params: { id: article.id } });
};
</script>

<style lang="less" scoped>
.popular-article {
    width: 80%;
    .title {
        font-size: 24px;
        font-weight: 700;
        color: @main-font-color;
    }
    .article-list {
        display: flex;
        flex-wrap: wrap;
        .article-item {
            width: calc((100% - 64px) / 3);
            &:not(:nth-child(3n)) {
                margin-right: 32px;
            }
        }
    }
    .more {
        margin: auto;
        color: @purple-color;
        font-weight: 700;
        width: fit-content;
        padding: 4px 8px 4px 12px;
        font-size: 14px;
        cursor: pointer;
        img {
            width: 12px;
            margin-left: 4px;
        }
        animation: jump 2s ease-in-out infinite;
    }

    @keyframes jump {
        0%,
        100% {
            transform: translateX(-5px);
        }
        50% {
            transform: translateX(5px);
        }
    }
}
</style>
