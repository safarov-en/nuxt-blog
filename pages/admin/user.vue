<template>
    <el-form
        ref="form"
        :model="controls"
        :rules="rules"
        @submit.prevent="onSubmit"
    >
        <h2>Создать пользователя</h2>
        <el-form-item label="Логин" prop="login">
        <el-input v-model.trim="controls.login" />
        </el-form-item>
        <div class="mb2">
            <el-form-item label="Пароль" prop="password">
                <el-input v-model.trim="controls.password" type="password" />
            </el-form-item>
        </div>
        <el-form-item>
            <el-button
                type="primary"
                native-type="submit"
                round
                :loading="loading"
            >
                Создать
            </el-button>
        </el-form-item>
    </el-form>
</template>
<script>
definePageMeta({
    layout: 'admin',
    middleware: ['admin-auth']
})
import {authStore} from '../../store/auth'
import {ref} from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage } from "element-plus"
export default {
    setup() {
        const store = authStore()
        const router = useRouter()
        const route = useRoute()
        const loading = ref(false)
        const controls = ref({
            login: '',
            password: ''
        })
        const rules = ref({
            login: [
                { required: true, message: 'Введите логин', trigger: 'blur' }
            ],
            password: [
                {
                    required: true,
                    message: 'Введите пароль',
                    trigger: 'blur',
                },
                {
                    min: 6,
                    message: 'Пароль должен быть не менее 6 символов',
                    trigger: 'blur'
                }
            ]
        })
        const form = ref(null)
        function onSubmit() {
            form.value.validate(async valid => {
                if(valid) {
                    loading.value = true
                    try {
                        const formData = {
                            login: controls.value.login,
                            password: controls.value.password
                        }
                        await store.createUser(formData)
                        ElMessage.success('Новый пользователь добавлен')
                        controls.value.login = ''
                        controls.value.password = ''
                        loading.value = false
                    } catch(e) {
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
<style lang="scss" scoped>
    form {
        width: 600px;
    }
</style>