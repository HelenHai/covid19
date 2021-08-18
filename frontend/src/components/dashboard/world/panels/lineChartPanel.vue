<!-- Vaccination/Cases/Deaths -->

<template>
    <el-image
        :src="require('../graphics/advice.jpeg')"
        :fit="fit"
        class="panel-container"
    >
    </el-image>
</template>

<script>
export default {
    name: "lineChartPanel",
    data() {
        return {
            fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        }
    }
}
</script>

<style scoped>
.panel-container {
    height: 360px;
}
</style>