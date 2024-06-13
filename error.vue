<template>
    <NuxtLayout></NuxtLayout>
    <div class="error-layout">
        <div class="error-content">
            <h1 class="error-title">Ошибка 404</h1>
            <nuxt-link to="/">Вернутся на главную</nuxt-link>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .error-layout {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .error-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 4 rem;
    }
    .error-title {
        color: rgb(145, 7, 7);
        margin-bottom: 1rem;
    }
</style>