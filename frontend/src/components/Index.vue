<template>
  <div class="common-layout h_layout">
    <el-container class="h_layout">
      <el-aside width="200px">
        <Nav></Nav>
      </el-aside>
      <el-container>
        <el-header>
          <i class="el-icon-s-fold"/>
        </el-header>
        <el-main>
          <Breadcrumb></Breadcrumb>
          <div class="content-layout">
            <Dashboard></Dashboard>
          </div>
        </el-main>
        <el-footer>developed by Xin Hai</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Breadcrumb from "./common/Breadcrumb";
import Nav from "./common/Nav";
import Dashboard from './dashboard/Index';

export default {
  name: 'Index',
  components: {
    Breadcrumb,
    Nav,
    Dashboard,
  },
  data() {
    return {

    };
  },
};
</script>

<style lang="less">
.h_layout {
  height: 100%;
  background: #f0f2f5;
  .content-layout {
    height: inherit;
    background-color: white;
    margin: 10px 0;
  }
}
.el-header, .el-footer {
  color: #333;
  line-height: 60px;
}
.el-footer {
  text-align: center;
}
.el-header {
  background-color: white;
  .el-icon-s-fold {
    cursor: pointer;
  }
}

.el-aside {
  background-color: #000;
  color: white;
  text-align: center;
  line-height: 200px;
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

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
