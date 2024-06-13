<template>
    <article class="post">
        <header class="post-header">
            <div class="post-title">
                <h1>Post title</h1>
                <nuxt-link to="/">
                    <el-icon><Back /></el-icon>
                </nuxt-link>
            </div>
            <div class="post-info">
                <small>
                    <el-icon><AlarmClock /></el-icon>
                    {{new Date().toLocaleString()}}
                </small>
                <small>
                    <el-icon><View /></el-icon>
                </small>
            </div>
            <div class="post-image">
                <img />
            </div>
        </header>
        <main class="post-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laudantium reprehenderit repudiandae vero maiores, earum explicabo minima deserunt voluptates libero inventore unde ipsa culpa omnis voluptatibus quidem doloremque obcaecati fugit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laudantium reprehenderit repudiandae vero maiores, earum explicabo minima deserunt voluptates libero inventore unde ipsa culpa omnis voluptatibus quidem doloremque obcaecati fugit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laudantium reprehenderit repudiandae vero maiores, earum explicabo minima deserunt voluptates libero inventore unde ipsa culpa omnis voluptatibus quidem doloremque obcaecati fugit.</p>
        </main>
        <footer>
            <div class="comments" v-if="true">
                <MainComment
                    v-for="comment in 4"
                    :key="comment"
                    :comment="comment"
                />
            </div>
            <div class="text-center" v-else>Коментариев нет</div>
        </footer>
    </article>
</template>
<script>
export default {
    validate({params}) {
        return Boolean(params.id)
    }
}
</script>
<style lang="scss" scoped>
    .post {
        max-width: 600px;
        margin: 0 auto;
    }
    .post-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }
    .post-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: .5rem;
    }

    .post-image img {
        width: 100%;
        height: auto;
    }
    .post-header {
        margin-bottom: 1.5rem;
    }
    .post-content {
        margin-bottom: 2rem;
    }
</style>