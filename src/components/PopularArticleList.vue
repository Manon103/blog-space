<template>
    <div class="popular-article mt-32">
        <div class="title mb-32">推荐文章</div>
        <div class="article-list">
            <ArticleItem
                v-for="item in articleList"
                :key="item.title"
                :article="item"
                class="article-item mb-24"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Article } from '@/model/Article';
import { ref } from 'vue';
import ArticleItem from './ArticleItem.vue';

const articleList = ref<Article[]>([
    {
        title: 'Vue3.0新特性',
        description:
            'Vue3.0新特性介绍 测试文本 你说这个是什么东西 这个是个测试文本',
        cover: 'https://cdn.pixabay.com/photo/2023/10/24/02/49/bike-8337261_960_720.jpg',
        createTime: '2021-03-25',
        tags: ['Vue3.0'],
    },
    {
        title: 'React 18 新特性',
        description:
            'React 18 新特性介绍 This is a test text This is a test text This is a test text This is a test text',
        cover: 'https://cdn.pixabay.com/photo/2024/10/17/16/14/waterfall-9128051_960_720.jpg',
        createTime: '2022-01-15',
        tags: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
    },
    {
        title: 'Angular 12 更新',
        description:
            'Angular 12 的新功能和改进 This is a test text This is a test text This is a test text This is a test text This is a test text This is a test text This is a test text This is a test text This is a test text',
        cover: 'https://cdn.pixabay.com/photo/2023/10/30/05/53/highway-8351864_960_720.jpg',
        createTime: '2021-05-12',
        tags: ['Angular', 'TypeScript'],
    },
    {
        title: 'Svelte 3 简介',
        description: 'Svelte 3 的特点和优势',
        cover: 'https://cdn.pixabay.com/photo/2024/02/24/20/55/cards-8594729_960_720.jpg',
        createTime: '2020-11-20',
        tags: ['Svelte', 'JavaScript'],
    },
    {
        title: 'Node.js 14 发布',
        description: 'Node.js 14 的新特性和改进',
        cover: 'https://cdn.pixabay.com/photo/2024/09/12/14/56/lake-9042527_960_720.png',
        createTime: '2020-04-21',
        tags: ['Node.js', 'JavaScript'],
    },
    {
        title: 'Deno 1.0 发布',
        description: 'Deno 1.0 的特点和使用',
        cover: 'https://cdn.pixabay.com/photo/2024/06/05/19/45/mountains-8811206_960_720.jpg',
        createTime: '2020-05-13',
        tags: ['Deno', 'JavaScript'],
    },
]);
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
}
</style>
