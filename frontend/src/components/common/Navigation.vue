<template>
    <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        background-color="#001529"
        text-color="#fff"
        active-text-color="#ffd04b"
    >
        <el-submenu index="1">
            <template #title>
                <i class="el-icon-location"></i>
                <span>Dashboard</span>
            </template>
            <el-menu-item-group>
                <template #title>分组一</template>
                <el-menu-item index="1-1" @click="this.$router.push('/')">首页</el-menu-item>
            </el-menu-item-group>

            <el-menu-item-group title="Variants">
                <el-menu-item index="1-3" @click="this.$router.push('/variants')">选项1</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2" @click="this.$router.push('/news')">
            <i class="el-icon-menu"></i>
            <template #title>News</template>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <template #title>导航四</template>
        </el-menu-item>
    </el-menu>
</template>

<script>
import {mapState} from 'vuex'

export default {
    data() {
        return {};
    },
    computed: {
        ...mapState({
            isCollapse: state => state.layout.navIsCollapse
        })
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
    }
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.shrinkBtn {
    position: fixed;
    left: -18px;
    top: 38px;
    margin-left: 100px;
    transform: rotate(180deg);
}
</style>
