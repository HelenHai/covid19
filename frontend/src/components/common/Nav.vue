<template>
  <el-main>
<!--    <el-col>-->
<!--      <el-menu-->
<!--        default-active="1"-->
<!--        class="el-menu-vertical-demo nav-wrap"-->
<!--        @open="handleOpen"-->
<!--        @close="handleClose"-->
<!--        background-color="#000"-->
<!--        text-color="#fff"-->
<!--        active-text-color="#ffd04b"-->
<!--        :uniqueOpened="true"-->
<!--    >-->
<!--      <el-submenu index="1">-->
<!--        <template #title>-->
<!--          <i class="el-icon-s-marketing"></i>-->
<!--          <span>Dashboard</span>-->
<!--        </template>-->
<!--        <el-menu-item-group>-->
<!--          <template #title> UK Summary</template>-->
<!--          <el-menu-item index="1-1">Dashboard</el-menu-item>-->
<!--          <el-menu-item index="1-2">Vaccination INFO</el-menu-item>-->
<!--        </el-menu-item-group>-->
<!--        <el-menu-item-group title="Worldwide Summary">-->
<!--          <el-menu-item index="1-3">Dashboard</el-menu-item>-->
<!--        </el-menu-item-group>-->
<!--      </el-submenu>-->
<!--      <el-menu-item index="2">-->
<!--        <i class="el-icon-message-solid"></i>-->
<!--        <template #title>News</template>-->
<!--      </el-menu-item>-->
<!--      <el-menu-item index="3">-->
<!--        <i class="el-icon-s-tools"></i>-->
<!--        <template #title>Settings</template>-->
<!--      </el-menu-item>-->
<!--    </el-menu>-->
<!--    </el-col>-->
  </el-main>
</template>

<script>
export default {
  name: "Nav",
  data() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.nav {
  height: 100%;
}
.el-col {
  width: 100%;
}
.el-menu {
  border-right: none;
}
.switch {
  background-color: #002140;
  height: 10px;
  cursor:pointer;
}
.el-icon-arrow-left {
  color: white;
  background-color: #002140;
  padding: 0;
  border: none;
  width: 100%;
}
.nav-wrap {
  text-align: left;
}
</style>