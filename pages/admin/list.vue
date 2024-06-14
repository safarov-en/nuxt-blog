<template>
    <el-table
        :data="posts"
        style="width: 100%"
    >
        <el-table-column
            prop="title"
            label="Название"
        />
        <el-table-column label="Дата">
            <template #default="{row: {date}}">
                <el-icon><AlarmClock /></el-icon>
                <span style="margin-left: 10px;">
                    {{ new Date(date).toLocaleString() }}
                </span>
            </template>
        </el-table-column>
        <el-table-column label="Просмотры">
            <template #default="{row: {views}}">
                <el-icon><View /></el-icon>
                <span style="margin-left: 10px;">{{ views }}</span>
            </template>
        </el-table-column>
        <el-table-column label="Коментарии">
            <template #default="{row: {comments}}">
                <el-icon><Message /></el-icon>
                <span style="margin-left: 10px;">{{ comments.length }}</span>
            </template>
        </el-table-column>
        <el-table-column label="Действия">
            <template #default="{row: {_id}}">
                <el-button
                    :icon="Edit"
                    type="primary"
                    circle
                    @click="open(_id)"
                />
                <el-button
                    :icon="Delete"
                    type="danger"
                    circle
                    @click="remove(_id)"
                />
            </template>
        </el-table-column>
    </el-table>
</template>
<script>
definePageMeta({
    layout: 'admin',
    middleware: ['admin-auth']
})
import {Delete, Edit} from '@element-plus/icons-vue'
import { postStore } from '~/store/post';
export default {
    setup() {
        const store = postStore()
        const { data: posts } = useAsyncData('fetchAdmin', async () => {
            console.log(store.fetchAdmin())
            return await store.fetchAdmin();
        })
        const open = (id) => {

        }
        const remove = (id) => {

        }
        return {
            posts,
            Delete,
            Edit,
            open,
            remove
        }
    }
}
</script>
