<template>
    <el-row :gutter="20">
        <el-col :span="16">
            <el-card>
                <PieChartItem></PieChartItem>
            </el-card>
        </el-col>
        <el-col :span="8">
            <el-card>
            </el-card>
        </el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="8">
            <el-card></el-card>
        </el-col>
        <el-col :span="8">
            <el-card></el-card>
        </el-col>
        <el-col :span="4">
            <el-card></el-card>
        </el-col>
        <el-col :span="4">
            <el-card></el-card>
        </el-col>
    </el-row>
</template>

<script>
import PieChartItem from './panels/PieChartItem'

export default ({
    name: "Index",
    components: {
        PieChartItem,
    },
});
</script>

<style scoped>
.chart {
    height: 400px;
}

.el-row {
    margin: 30px 0;
}
</style>
