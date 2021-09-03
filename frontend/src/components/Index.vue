<template>
    <div class="h100">
        <el-container class="h100">
            <Navigation></Navigation>
            <el-container>
                <el-header class="line1">
                    <i v-if="!isCollapse" class="el-icon-s-fold pointer" @click="toggleNavBar"></i>
                    <i v-else class="el-icon-s-unfold pointer" @click="toggleNavBar"></i>
                </el-header>
                <el-main class="bg">
                    <Breadcrumb></Breadcrumb>
                    <div class="h100 mt10 mb10">
                        <router-view/>
                    </div>
                </el-main>
<!--                <div class="el-footer">-->
<!--                    <span>Developed by Xin Hai</span>-->
<!--                    <i class="el-icon-service ml10"></i>-->
<!--                    <span class="ml10">xin.hai@postgrad.manchester.ac.uk</span>-->
<!--                </div>-->
            </el-container>
        </el-container>

    </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'

import Breadcrumb from "./common/Breadcrumb";
import Nav from "./common/Nav";
import Navigation from "./common/Navigation";
import Dashboard from './dashboard/Index';

export default {
    name: 'Index',
    components: {
        Breadcrumb,
        Nav,
        Dashboard,
        Navigation,
    },
    data() {
        return {};
    },
    computed: {
        ...mapState({
            isCollapse: state => state.layout.navIsCollapse
        })
    },
    methods: {
        ...mapActions([
            'getNavCollapse',
        ]),
        toggleNavBar() {
            this.getNavCollapse()
        }
    }
};
</script>

<style lang="less">
.el-header {
    color: #333;
    line-height: 60px;
}

.el-footer {
    text-align: center;
    line-height: 60px;
    font-size: 11px;
}

.el-main {
    height: 100%;
    color: #333;
    text-align: center;
    line-height: 160px;
}

body > .el-container {
    margin-bottom: 40px;
}

.bg {
    background-color: #eff2f5;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>