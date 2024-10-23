<template>
    <div class="container">
        <div class="name">Manon's Blog</div>
        <div class="menu">
            <div class="menu-item" v-for="item in menuList">
                <img :src="item.icon" alt="" />
                {{ item.label }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HomeIcon from '@/assets/icons/home.svg';
import ArticleIcon from '@/assets/icons/article.svg';
import AboutIcon from '@/assets/icons/about.svg';

const menuList = ref([
    {
        label: '首页',
        icon: HomeIcon,
    },
    {
        label: '文章',
        icon: ArticleIcon,
    },
    {
        label: '关于',
        icon: AboutIcon,
    },
]);
</script>

<style lang="less" scoped>
.container {
    width: 100%;
    height: 60px;
    position: absolute;
    top: 0;
    z-index: 1;
    color: #fff;
    padding: 0 24px;
    transition: all 0.3s linear;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
        background-color: #000;
        opacity: 0.5;
    }

    .name {
        font-size: 18px;
        cursor: pointer;
        font-weight: 700;
    }

    .menu {
        display: flex;
        align-items: center;
        height: 100%;
        .menu-item {
            margin: 0 24px;
            font-weight: 700;
            cursor: pointer;
            font-size: 16px;
            display: flex;
            align-items: center;
            &:hover {
                color: #4bf06cce;
            }

            svg:hover {
                color: #4bf06cce;
            }

            img {
                width: 24px;
                height: 24px;
                margin-right: 8px;
            }
        }
    }
}
</style>
