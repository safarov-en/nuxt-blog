<template>
    <el-form
            ref="form"
            :model="controls"
            :rules="rules"
            @submit.prevent="onSubmit"
        >
            <h1 class="mb">Создать новый пост</h1>
            <el-form-item label="Введите название поста" prop="title">
                <el-input   
                    v-model.trim="controls.title"
                />
            </el-form-item>
            <el-form-item label="Текст в формате .md или .html" prop="text">
                <el-input
                    text="textarea"    
                    v-model.trim="controls.text"
                    resize="none"
                    :rows="10"
                />
            </el-form-item>
            <el-form-item>
                <el-button
                    type="primary"
                    native-type="submit"
                    round
                    :loading="loading"
                >
                    Создать пост
                </el-button>
            </el-form-item>
        </el-form>
</template>
<script>
definePageMeta({
    layout: 'admin',
    middleware: ['admin-auth']
})
import { ref } from 'vue';
import { postStore } from '~/store/post';
import { ElMessage } from 'element-plus';
export default {
    setup() {
        const store = postStore()
        const loading = ref(false)
        const controls = ref({
            title: '',
            text: ''
        })
        const rules = ref({
            text: [
                {required: true, message: 'Текст не должен быть пустым', trigger: 'blur'}
            ],
            title: [
                {required: true, message: 'Название поста не может быть пустым', trigger: 'blur'}
            ]
        })
        const form = ref(null)
        function onSubmit() {
            form.value.validate(async valid => {
                if(valid) {
                    loading.value = true
                    const formData = {
                        title: controls.value.title,
                        text: controls.value.text
                    }
                    try {
                        await store.create(formData)
                        controls.value.title = ''
                        controls.value.text = ''
                        ElMessage.success('Пост создан')
                    } catch(e) {} finally {
                        loading.value = false
                    }
                }
            })
        }
        return {
            loading,
            controls,
            rules,
            form,
            onSubmit
        }
    }
}
</script>
<style scoped>
    form {
        width: 600px;
    }
</style>