<template>
    <div>Очищаем данные</div>
</template>
<script>
definePageMeta({
    layout: 'admin',
    middleware: ['admin-auth']
})
import {authStore} from '../../store/auth'
import { useRouter } from 'vue-router';
export default {
    setup() {
        const router = useRouter()
        const store = authStore()
        store.logout()
        router.push('/admin/login?message=logout')
    }
}
</script>
