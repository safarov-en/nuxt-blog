import {defineStore} from 'pinia'

export const postStore = defineStore({
    id: 'post',
    state() {
        return {

        }
    },
    getters: {

    },
    actions: {
        async fetchAdmin() {
            return await new Promise(resolve => {
                setTimeout(() => {
                    resolve([
                        {
                            title: 'Post 1',
                            date: new Date(),
                            views: 22,
                            comments: [1, 2],
                            _id: Math.random()
                        },
                        {
                            title: 'Post 2',
                            date: new Date(),
                            views: 22,
                            comments: [1, 2],
                            _id: Math.random()
                        }
                    ])
                }, 1000)
            })
        }
    }
})