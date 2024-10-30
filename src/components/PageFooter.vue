<template>
    <div class="page-footer center">
        <div class="contact mr-32">
            <span class="title mr-8">联系方式</span>
            <span class="email">manon_zheng@163.com</span>
        </div>
        <div class="tip">Made with ❤️ by Manon Zheng</div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.page-footer {
    background-color: #343a40;
    color: #fff;
    width: 100%;
    font-size: 14px;
    padding: 12px;
    .contact {
        display: flex;
        align-items: center;
        .title {
            font-weight: 700;
        }
        .email {
            font-size: 12px;
        }
    }
    .tip {
        font-weight: 700;
    }
}
</style>
