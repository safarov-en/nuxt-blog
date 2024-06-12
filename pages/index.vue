<template>
    <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="18" :md="12" :lg="10">
            <main-post
                v-for="post in 3"
                :key="post"
            />
        </el-col>
    </el-row>
</template>
<script>
</script>
