import { defineStore } from "pinia"

export const authStore  = defineStore({
    id: 'auth',
    state() {
        return {
            token: null
        }
    },
    actions: {
        async login(formData) {
            const token = await new Promise(resolve => {
                setTimeout(() => resolve('mock-token'), 2000)
            })
            this.setToken(token)
        },
        setToken(token) {
            this.token = token
        }
    },
    getters: {
        isAuthenticated: state => Boolean(state.token)
    }
})