import {authStore} from '../store/auth'

export default function (m) {
    const store = authStore()
    if (!store.isAuthenticated) {
        return navigateTo('/admin/login?message=login')
    }
}