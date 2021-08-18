<!-- BigNumber -->
<template>
    <div class="number-container">
        <el-row>
<!--            <el-col :span="12"><div class="grid-content">Total Cases:</div></el-col>-->
            <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <el-row>
<!--            <el-col :span="12"><div class="grid-content bg-purple"></div>Total Deaths:</el-col>-->
            <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <el-row>
<!--            <el-col :span="12"><div class="grid-content bg-purple"></div>Total Vaccinations:</el-col>-->
            <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
    </div>
</template>

<script>

export default {
    name: "NumberPanel",
    data() {
        return {
        }
    }
}
</script>

<style scoped>
.number-container {
    height: 80px;
    line-height: 35px;
    font-size: 14px;
    text-align: left;
    font-family: sans-serif;
    font-weight: bolder;
}
</style>