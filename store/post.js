import {defineStore} from 'pinia'
import { initialStore } from './index'
const posts = [
    {
        title: 'Post 1',
        date: new Date(),
        views: 22,
        comments: [1, 2],
        _id: '1'
    },
    {
        title: 'Post 2',
        date: new Date(),
        views: 22,
        comments: [1, 2],
        _id: '2'
    }
]
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
                    resolve(posts)
                }, 1000)
            })
        },
        async remove(id) {
            
        },
        async update({text, id}) {

        },
        async fetchAdminById(id) {
            return await new Promise(resolve => {
                setTimeout(() => {
                    resolve(posts.find(p => p._id === id))
                }, 1000)
            })
        },
        async create ({title, text, image}) {
            const store = initialStore()
            try {
                const fd = new FormData()
                fd.append('title', title)
                fd.append('text', text)
                fd.append('image', image, image.name)
                return await new Promise(resolve => {
                    setTimeout(() => {
                        resolve()
                    }, 1000)
                })
            } catch(e) {
                store.setError(e)
                throw e
            }
        }
    }
})