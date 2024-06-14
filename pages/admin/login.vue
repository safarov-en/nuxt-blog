<template>
    <el-card
        shadow="always"
        :style="{width: '500px'}"
    >
    <el-form
        ref="form"
        :model="controls"
        :rules="rules"
        @submit.prevent="onSubmit"
    >
        <h2>Войти в панель администратора</h2>
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
                Войти
            </el-button>
        </el-form-item>
    </el-form>
    </el-card>
</template>
<script>
definePageMeta({
    layout: 'empty',
})
import {authStore} from '../../store/auth'
import {ref, onMounted} from 'vue'
import { useRouter, useRoute } from 'vue-router';
import { ElMessage } from "element-plus";
export default {
    setup() {
        const store = authStore()
        const loading = ref(false)
        const router = useRouter()
        const route = useRoute()
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
        onMounted(() => {
            const {message} = route.query
            switch(message) {
                case 'login':
                ElMessage.info('Для начала войдите в систему')
                    break
                case 'logout':
                ElMessage.success('Вы успешно вышли из системы')
                    break
            }
        })
        function onSubmit() {
            form.value.validate(async valid => {
                if(valid) {
                    loading.value = true
                    try {
                        const formData = {
                            login: controls.value.login,
                            password: controls.value.password
                        }
                        await store.login(formData)
                        router.push('/admin')
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
