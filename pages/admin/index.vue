<template>
    <h1>Welcome to admin page</h1>
</template>
<script>
definePageMeta({
    layout: 'admin',
    middleware: ['admin-auth']
})
export default {
}
</script>
