import {defineStore} from 'pinia'

export const initialStore = defineStore({
    id: 'store',
    state() {
        return {
            error: null
        }
    },
    actions: {
        setError(error) {
            this.error = error
        },
        clearError() {
            this.error = null
        }
    },
    getters: {
        errorMessage: state => state.error
    }
})