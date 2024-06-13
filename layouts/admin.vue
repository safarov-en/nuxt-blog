<template>
    <div class="admin-layout-wrap">
        <el-container :style="{height: '100%'}">
            <el-aside width="250px">
                <admin-aside />
            </el-aside>
            <el-main>
                <slot />
            </el-main>
        </el-container>
    </div>
</template>
<script>
</script>
<style lang="scss" scoped>
    .admin-layout-wrap {
        width: 100%;
        height: 100vh;
    }
</style>
