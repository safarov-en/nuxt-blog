<template>
    <el-menu
        router
        :style="{height: '100%'}"
        :default-active="$route.path"
    >
        <el-menu-item index="/admin">
            <el-icon><Menu /></el-icon>
            <span>Аналитика</span>
        </el-menu-item>
        <el-menu-item index="/admin/create">
            <el-icon><Edit /></el-icon>
            <span>Создать</span>
        </el-menu-item>
        <el-menu-item index="/admin/list">
            <el-icon><Tickets /></el-icon>
            <span>Посты</span>
        </el-menu-item>
        <el-menu-item index="/admin/user">
            <el-icon><User /></el-icon>
            <span>Пользователи</span>
        </el-menu-item>
        <el-menu-item index="/admin/logout">
            <el-icon><Setting /></el-icon>
            <span>Выйти</span>
        </el-menu-item>
    </el-menu>
</template>