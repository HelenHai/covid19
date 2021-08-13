<template>
    <world-wide-info></world-wide-info>
</template>

<script>
import WorldWideInfo from './world/Index';
export default {
    name: "Dashboard",
    components: {
        WorldWideInfo
    }
};
</script>

<style scoped>
.chart {
    height: 400px;
}

.el-row {
    margin: 30px 0;
}
</style>
