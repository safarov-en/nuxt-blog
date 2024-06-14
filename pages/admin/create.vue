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
                    type="textarea"    
                    v-model="controls.text"
                    resize="none"
                    :rows="10"
                />
            </el-form-item>
            <el-button class="mb" type="success" plain @click="previewDialog = true">
                Предпросмотр
            </el-button>
            <el-dialog
                v-model="previewDialog"
                title="Предпросмотр"
            >
                <MDC :value="controls.text" />
            </el-dialog>
            <el-upload
                class="mb"
                drag
                ref="upload"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                :on-change="handleImageChange"
                :auto-upload="false"
            >
                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div class="el-upload__text">
                    Перетащите картинку <em>или нажмите</em>
                </div>
                <template #tip>
                    <div class="el-upload__tip">
                        файлы с расширением jpg/png
                    </div>
                </template>
            </el-upload>
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
        const previewDialog = ref(false)
        const image = ref(null)
        const upload = ref(null)
        function onSubmit() {
            form.value.validate(async valid => {
                if(valid && image.value) {
                    loading.value = true
                    const formData = {
                        title: controls.value.title,
                        text: controls.value.text,
                        image: image.value
                    }
                    try {
                        await store.create(formData)
                        controls.value.title = ''
                        controls.value.text = ''
                        image.value = null
                        upload.value.clearFiles()
                        ElMessage.success('Пост создан')
                    } catch(e) {} finally {
                        loading.value = false
                    }
                } else {
                    ElMessage.warning('Форма не валидна')
                }
            })
        }
        function handleImageChange(file, fileList) {
            image.value = file.raw
        }
        return {
            loading,
            controls,
            rules,
            form,
            onSubmit,
            previewDialog,
            handleImageChange,
            upload
        }
    }
}
</script>
<style scoped>
    form {
        width: 600px;
    }
</style>