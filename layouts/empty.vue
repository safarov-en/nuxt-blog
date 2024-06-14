<template>
    <div class="empty-layout">
        <slot />
    </div>
</template>
<script>
import {computed, watch} from 'vue'
import {initialStore} from '../store/index'
import { ElMessage } from "element-plus"
export default {
    setup() {
        const store = initialStore()
        const error = computed(() => store.errorMessage)
        watch(error, errorMessage => {
            ElMessage.error(errorMessage)
        })
        return {
            error
        }
    }
}
</script>

<style lang="scss" scoped>
    .empty-layout {
        display: flex;
        justify-content: center;
        width: 100%;
        padding-top: 4rem;
    }
</style>