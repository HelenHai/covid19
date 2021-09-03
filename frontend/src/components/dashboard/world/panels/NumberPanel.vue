<!-- BigNumber -->
<template>
    <div class="number-container">
        <el-row>
            <el-col :span="12">
                <span class="number2">Total cases</span>
            </el-col>
            <el-col :span="12">
                <span class="number2">Total deaths</span>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <span class="red-font number1">{{ numberData.confirmed }}</span>
            </el-col>
            <el-col :span="12">
                <span class="grey-font number1">{{ numberData.deaths }}</span>
            </el-col>
        </el-row>

    </div>
</template>

<script>

import {mapState, mapActions} from "vuex";

export default {
    name: "NumberPanel",
    computed: {
        ...mapState({
            numberData: state => state.panel.numberData
        })
    },
    async created() {
        await this.getNumbers('China')
    },
    data() {
        return {}
    },
    methods: {
        ...mapActions([
            "getNumbers"
        ])
    },

}
</script>

<style scoped>
.number-container {
    height: 80px;
    line-height: 25px;
    font-family: sans-serif;
    text-align: center;
    margin-top: 10px;
}

.red-font {
    color: #F56C6C;
}

.grey-font {
    color: #909399;
}

.number1 {
    margin: 10px;
    font-size: 25px;
    font-weight: bolder;
}

.number2 {
    font-size: 10px;
    color: #333;
    font-family: sans-serif;
}
</style>