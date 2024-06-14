<template>
    <div class="page-wrap">
        <el-breadcrumb separator="/" class="mb">
            <el-breadcrumb-item to="/admin/list">Посты</el-breadcrumb-item>
            <el-breadcrumb-item>{{ post.title }}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form
            ref="form"
            :model="controls"
            :rules="rules"
            @submit.prevent="onSubmit"
        >
            <el-form-item label="Текст в формате .md или .html" prop="text">
                <el-input
                    text="textarea"    
                    v-model.trim="controls.text"
                    resize="none"
                    :rows="10"
                />
            </el-form-item>
            <div class="mb">
                <small class="mr">
                    <el-icon><AlarmClock /></el-icon>
                    <span>
                        {{ new Date(post.date).toLocaleString() }}
                    </span>
                </small>
                <small>
                    <el-icon><View /></el-icon>
                    <span>{{ post.views }}</span>
                </small>
            </div>
            <el-form-item>
                <el-button
                    type="primary"
                    native-type="submit"
                    round
                    :loading="loading"
                >
                    Обновить
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
definePageMeta({
    layout: 'admin',
    middleware: ['admin-auth'],
})
import { postStore } from '~/store/post';
import { ElMessage } from 'element-plus';
export default {
    validate({params}) {
        return Boolean(params.id)
    },
    setup() {
        const store = postStore()
        const loading = ref(false)
        const controls = ref({
            text: ''
        })
        const rules = ref({
            text: [
                {required: true, message: 'Текст не должен быть пустым', trigger: 'blur'}
            ]
        })
        const form = ref(null)
        const { data: post } = useAsyncData('fetchAdminById', async ({_route: {params: {id}}}) => {
            return await store.fetchAdminById(id);
        })
        function onSubmit() {
            form.value.validate(async valid => {
                if(valid) {
                    loading.value = true
                    const formData = {
                        text: controls.value.text,
                        id: post.value._id
                    }
                    try {
                        await store.update(formData)
                        ElMessage.success('Пост обновлен')
                    } catch(e) {
                        loading.value = false
                    }
                }
            })
        }
        return {
            post,
            loading,
            controls,
            rules,
            form,
            onSubmit
        }
    }
}
</script>
<style lang="scss" scoped>
    .page-wrap {
        width: 600px;
    }
    .mr {
        margin-right: 2rem;
    }
</style>