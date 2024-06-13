<template>
    <el-card
        shadow="hover"
        :body-style="{padding: 0}"
        class="post"
    >
        <template #header>
            <header class="post-header">
                <h3></h3>
                <small>
                    <el-icon><AlarmClock /></el-icon>
                    {{new Date().toLocaleString()}}
                </small>
            </header>
        </template>
        <div class="post-body">
            <img src="" alt="" class="post-img" />
        </div>
        <footer class="post-footer">
            <el-button round @click="openPost">Открыть</el-button>
            <span>
                <el-icon><Message /></el-icon>
                12
            </span>
        </footer>
    </el-card>
</template>
<script>
export default {
    methods: {
        openPost() {
            this.$router.push('/post/ghr')
        }
    }
}
</script>
<style lang="scss" scoped>
    .post {
        margin-bottom: 1.5rem;
    }
    .post-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .post-img {
        width: 100%;
        height: auto;
    }
    .post-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
    }
</style>
