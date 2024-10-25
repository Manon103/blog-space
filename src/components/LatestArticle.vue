<template>
    <div class="latest-article">
        <img class="article-img" src="@/assets/images/latest.png" />
        <div class="article-content">
            <div class="article-info">
                <span class="type">最新文章</span>
                <div class="title">
                    Cheap Airline Tickets Great Ways To Save
                </div>
                <div class="synopsis">
                    In this digital generation where information can be easily
                    obtained within seconds, business cards still have retained
                    their In this digital generation where information can be
                    easily obtained within seconds, business cards still have
                    retained their
                </div>
            </div>
            <div class="footer-info">
                <span class="tag">
                    <el-tag type="primary">Tag 1</el-tag>
                    <el-tag type="success">Tag 2</el-tag>
                    <el-tag type="warning">Tag 4</el-tag>
                </span>
                <span class="date-info">2024-10-25 11:10</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.latest-article {
    width: 80%;
    background: #fff;
    display: flex;
    margin-top: -64px;
    box-shadow: 0 0 6px #0003;
    border-radius: 24px;
    overflow: hidden;
    max-height: 400px;
    min-height: 320px;
    .article-img {
        width: 50%;
        object-fit: cover;
    }
    .article-content {
        width: 50%;
        padding: 32px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .article-info {
            .type {
                background-color: #ebf8f3;
                color: #1565d8;
                font-weight: 700;
                font-size: 14px;
                padding: 8px 12px;
                border-radius: 16px;
            }
            .title {
                line-height: 48px;
                font-size: 36px;
                font-weight: 700;
                color: #183b56;
                margin-top: 24px;
                margin-bottom: 32px;
                cursor: pointer;
            }
            .synopsis {
                color: #5a7184;
                font-size: 18px;
                line-height: 32px;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                display: -webkit-box;
            }
        }
        .footer-info {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            align-items: center;
            color: #5a7184;
            margin-top: 12px;
            flex-wrap: wrap;
            gap: 12px;
            .tag {
                /deep/ .el-tag {
                    margin-right: 12px;
                }
            }
        }
    }
}
</style>
