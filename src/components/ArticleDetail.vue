<template>
    <div class="article-detail">
        <img :src="article?.cover" alt="" />
        <div class="brief center">
            <span class="title mb-16 mt-12">{{ article?.title }}</span>
            <div class="description mt-16 ellipsis">
                {{ article?.description }}
            </div>
            <span class="createTime mt-16">{{ article?.createTime }}</span>
            <TagList
                :tag-list="article?.tags ?? []"
                class="mt-16"
                tagStyle="plain"
            ></TagList>
        </div>
        <div class="content mt-24" ref="content" v-html="detail"></div>
    </div>
</template>

<script setup lang="ts">
import { Marked } from 'marked';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import hljs from 'highlight.js';
import { markedHighlight } from 'marked-highlight';
import articleMap from '@/assets/articles/articleMap';
import type { Article } from '@/model/Article';
import TagList from './TagList.vue';

const content = ref(null);
const detail = ref<string>('');
const article = ref<Article>();

onMounted(async () => {
    const marked = new Marked(
        markedHighlight({
            emptyLangClass: 'hljs',
            langPrefix: 'hljs language-',
            highlight(code, lang) {
                const language = hljs.getLanguage(lang) ? lang : 'plaintext';
                return hljs.highlight(code, { language }).value;
            },
        }),
    );

    const id = useRoute().params.id;
    article.value = articleMap.get(Number(id));
    if (article.value) {
        const file = await article.value.content();
        detail.value = marked.parse(file.default) as string;
    }
});
</script>

<style lang="less" scoped>
/deep/ code:not(.hljs) {
    background: #818b981f;
    border-radius: 6px;
    padding: 4px 8px;
    margin: 0 4px;
}

/deep/ pre {
    margin: 12px;
}

/deep/ p {
    margin-bottom: 24px;
}

/deep/ img {
    width: 60%;
    max-height: 400px;
}
</style>

<style scoped lang="less">
.article-detail {
    min-height: 100%;
    position: relative;
    background-color: #f6f6f7;
    padding-bottom: 32px;
    img {
        object-fit: cover;
        width: 100%;
        height: calc(0.4 * 100vh);
    }
    .brief {
        flex-direction: column;
        position: absolute;
        color: #fff;
        width: 100%;
        height: calc(0.4 * 100vh);
        top: 0;
        text-align: center;
        backdrop-filter: blur(12px);
        .title {
            font-size: 36px;
            font-weight: 700;
            line-height: 36px;
        }
        .description {
            font-size: 14px;
            font-size: 14px;
            max-width: 70%;
        }
        .createTime {
            font-size: 14px;
        }
    }
    .content {
        width: 60%;
        margin: auto;
        color: @main-font-color;
        background: #fff;
        padding: 36px;
        margin-top: 24px;
        line-height: 35px;
        font-size: 15px;
        border-radius: 6px;
        box-shadow: 0 0 8px #0001;
    }
}
</style>
