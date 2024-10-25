<template>
    <div :class="['container', headerClass]">
        <div class="name">Manon's Blog</div>
        <div class="menu">
            <div class="menu-item" v-for="item in menuList" :key="item.label">
                <!-- <img :src="item.icon" alt="" /> -->
                {{ item.label }}
            </div>
            <span class="split"></span>
            <div class="menu-item">
                <img src="@/assets/icons/github.svg" alt="" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
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

const headerClass = ref('');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const changeHeaderStyle = (event: any) => {
    headerClass.value =
        event.target.scrollingElement.scrollTop !== 0 ? 'hover-back' : '';
};

onMounted(() => {
    document.addEventListener('scroll', changeHeaderStyle);
});

onUnmounted(() => {
    document.removeEventListener('scroll', changeHeaderStyle);
});
</script>

<style lang="less" scoped>
.container {
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    z-index: 1;
    color: #fff;
    padding: 0 32px;
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

            &:last-child {
                margin-right: 0;
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

        .split {
            display: inline-block;
            height: 26px;
            background-color: #fff;
            width: 2px;
        }
    }
}

.hover-back {
    background-color: #000;
    opacity: 0.5;
}
</style>
