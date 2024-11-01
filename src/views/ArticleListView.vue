<template>
    <div class="article-list-view">
        <HeaderNav />
        <div class="back center mb-32">
            <span class="tip">Find All Blogs From Here</span>
            <div class="category center mt-32">
                分类：
                <TagList
                    :tag-list="allCategories"
                    tagStyle="plain"
                    canSelected
                    activeClass="active"
                    :selectedTag="selectedCategory"
                    @clickTag="handleClickTag"
                ></TagList>
            </div>
        </div>

        <div class="article-list">
            <div class="empty" v-if="!articleList.length">
                <img src="@/assets/images/empty.png" alt="" />
                还没有文章哦
            </div>
            <ArticleItem
                v-for="item in articleList"
                :key="item.title"
                :article="item"
                @click="() => jumpToArticleDetail(item)"
                class="article-item mb-24"
            />
        </div>
        <PageFooter />
    </div>
</template>

<script setup lang="ts">
import articleMap from '@/assets/articles/articleMap';
import type { Article } from '@/model/Article';
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import HeaderNav from '@/components/HeaderNav.vue';
import ArticleItem from '@/components/ArticleItem.vue';
import PageFooter from '@/components/PageFooter.vue';
import TagList from '@/components/TagList.vue';
import { Category } from '@/constants/Category';

const router = useRouter();
const allCategories = ref(Category);
const selectedCategory = ref('ALL');

onMounted(() => {
    const route = router.currentRoute.value;
    selectedCategory.value = (route.query.tag as string) ?? 'ALL';
});

const articleList = computed(() => {
    let list = articleMap.values();
    if (selectedCategory.value !== 'ALL') {
        list = articleMap
            .values()
            .filter(item => item.tags.includes(selectedCategory.value));
    }
    const route = router.currentRoute.value;
    if (route.query.query) {
        list = list.filter(item =>
            item.title
                .toLowerCase()
                .includes((route.query.query as string).toLowerCase()),
        );
    }
    return [...list];
});

const handleClickTag = (tag: string) => {
    selectedCategory.value = tag;
};

const jumpToArticleDetail = (article: Article) => {
    router.push({ name: 'article', params: { id: article.id } });
};
</script>

<style lang="less" scoped>
.article-list-view {
    height: 100%;
    display: flex;
    flex-direction: column;
}
.back {
    background-image: url(/src/assets/images/mountain-back.webp);
    width: 100%;
    height: calc(0.5 * 100vh);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center 26%;
    flex-direction: column;
    color: #fff;
    position: relative;
    flex-shrink: 0;
    .tip {
        font-size: 36px;
        font-weight: 700;
    }
    .category {
        font-weight: bold;
        font-size: 18px;
        position: absolute;
        bottom: 16px;
    }

    .active {
        cursor: pointer;
        background-color: #fff;
        color: @main-font-color;
    }
    /deep/ .tag {
        height: 32px;
        line-height: 30px;
        font-size: 16px;
        padding: 0 12px;
        margin-right: 16px;
    }
    /deep/ .tag:hover {
        .active();
    }
    /deep/ .tag.active {
        cursor: pointer;
        background-color: #fff;
        color: @main-font-color;
    }
}
.article-list {
    width: 70%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    .article-item {
        width: calc((100% - 64px) / 3);
        &:not(:nth-child(3n)) {
            margin-right: 32px;
        }
    }
}
.empty {
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 200px;
    }
}
</style>
