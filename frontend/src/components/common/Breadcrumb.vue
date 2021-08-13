<template>
  <el-breadcrumb separator="/" class="breadcrumb-layout">
    <el-breadcrumb-item :to="{ path: '/' }">Main</el-breadcrumb-item>
    <el-breadcrumb-item><a href="/">Dashboard</a></el-breadcrumb-item>
<!--    <el-breadcrumb-item>活动列表</el-breadcrumb-item>-->
<!--    <el-breadcrumb-item>活动详情</el-breadcrumb-item>-->
  </el-breadcrumb>
</template>

<script>
export default {
  name: "Breadcrumb"
}
</script>

<style scoped>
.breadcrumb-layout {
}
</style>