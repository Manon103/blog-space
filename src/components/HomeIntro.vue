<template>
    <div class="home-intro">
        <div class="search">
            <el-input
                v-model="searchVal"
                placeholder="搜索文章"
                class="input-with-select"
            >
            </el-input>
            <el-button :icon="Search" />
            <div class="tags-container">
                <span>常用标签：</span>
                <span v-for="item in popularTags" :key="item" class="tag">{{
                    item
                }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue';

const searchVal = ref<string>('');
const popularTags = ref<string[]>(['CSS', 'Vue', 'React']);
</script>

<style scoped lang="less">
.home-intro {
    width: 100%;
    height: calc(100vh - 70px);
    background-image: url('@/assets/background.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center 65%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .search {
        width: 40%;
        margin-top: 300px;
        position: relative;

        .tags-container {
            margin-top: 20px;
            color: #fff;
            display: flex;
            align-items: center;
            .tag {
                display: inline-block;
                height: 32px;
                border: 1px solid #fff;
                border-radius: 4px;
                line-height: 32px;
                font-size: 14px;
                padding: 0 16px;
                margin-right: 12px;
                cursor: pointer;
                backdrop-filter: blur(5px);
                background-color: #0003;
                &:hover {
                    box-shadow: 0 0 3px #fff;
                }
            }
        }
    }

    /deep/ .el-input {
        height: 50px;
    }

    /deep/ .el-input__wrapper {
        background: #0002;
        border: 1px solid #e5e5e5;
        box-shadow: none;

        &.is-focus {
            border: 1px solid #fff;
            box-shadow: 0 0 3px #fff;
        }

        .el-input__inner {
            caret-color: #fff;
            --el-input-inner-height: 40px;
            color: #fff;
            font-size: 16px;

            &::placeholder {
                color: #b6b6b6;
                opacity: 1;
                font-size: 14px;
            }
        }
    }

    /deep/ .el-button {
        position: absolute;
        right: 0;
        height: 50px;
        background: initial;
        border: none;

        .el-icon {
            color: #e5e5e5;

            &:hover {
                color: #fff;
                scale: 1.2;
            }
        }
    }
}
</style>
