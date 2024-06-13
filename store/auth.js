import { defineStore } from "pinia"
import {initialStore} from './index'

export const authStore = defineStore({
    id: 'auth',
    state() {
        return {
            token: true
        }
    },
    actions: {
        async login(formData) {
            const store = initialStore()
            try {
                const token = await new Promise((resolve) => {
                    setTimeout(() => resolve('mock-token'), 2000)
                })
                this.setToken(token)
            } catch(e) {
                store.setError(e)
                throw e
            }
        },
        setToken(token) {
            this.token = token
        },
        logout() {
            this.token = null
        },
        async createUser(formData) {
            try {

            } catch(e) {

            }
        }
    },
    getters: {
        isAuthenticated: state => Boolean(state.token)
    }
})