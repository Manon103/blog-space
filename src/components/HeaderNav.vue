<template>
    <div :class="['container align-center pl-32 pr-32', headerClass]">
        <div class="name" @click="() => navPage('/home')">Manon's Blog</div>
        <div class="menu align-center">
            <div
                class="menu-item align-center"
                v-for="item in menuList"
                :key="item.label"
                @click="() => navPage(item.path)"
            >
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
import { onMounted, onUnmounted, ref } from 'vue';
import HomeIcon from '@/assets/icons/home.svg';
import ArticleIcon from '@/assets/icons/article.svg';
import AboutIcon from '@/assets/icons/about.svg';
import { useRouter } from 'vue-router';

const menuList = ref([
    {
        label: '首页',
        icon: HomeIcon,
        path: '/',
    },
    {
        label: '文章',
        icon: ArticleIcon,
        path: '/articleList',
    },
    {
        label: '关于',
        icon: AboutIcon,
        path: '/about',
    },
]);

const headerClass = ref('');
const router = useRouter();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const changeHeaderStyle = (event: any) => {
    headerClass.value =
        event.target.scrollingElement.scrollTop !== 0 ? 'hover-back' : '';
};

const navPage = (path: string) => {
    router.push(path);
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
    height: @header-height;
    position: fixed;
    top: 0;
    z-index: 1;
    color: #fff;
    transition: all 0.3s linear;
    justify-content: space-between;
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
        height: 100%;
        .menu-item {
            margin: 0 24px;
            font-weight: 700;
            cursor: pointer;
            font-size: 16px;
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
