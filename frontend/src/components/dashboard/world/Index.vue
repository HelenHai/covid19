<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="17">
                <el-card class="map-bg">
                    <MapPanel></MapPanel>
                </el-card>
            </el-col>
            <el-col :span="7" class="box-card">
                <el-card class="number">
                    <template #header>
                        <div class="card-header">
                            <span>{{activeCountry}}</span>
                            <i class="el-icon-remove pointer"></i>
                        </div>
                    </template>
                    <number-panel></number-panel>
                </el-card>
                <el-card v-show="piePanelIsVisible">
                    <variants-panel></variants-panel>
                </el-card>
                <el-card v-show="!piePanelIsVisible">
                    <line-chart-panel></line-chart-panel>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import MapPanel from "./panels/MapPanel";
import VariantsPanel from "./panels/VariantsPanel";
import NumberPanel from "./panels/NumberPanel";
import LineChartPanel from './panels/lineChartPanel'

export default {
    name: "WorldwideInfo",
    components: {
        MapPanel,
        VariantsPanel,
        NumberPanel,
        LineChartPanel
    },
    computed: {
        ...mapState({
            piePanelIsVisible: state => state.panel.piePanelIsVisible,
            activeCountry: state => state.panel.activeCountry,
        })
    }
}
</script>

<style scoped>
.map-bg {
    background-color: #404a59;
}
/*.el-card >>> .el-card__header {*/
/*    padding: 5px 10px;*/
/*}*/
.card-header {
    line-height: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform:capitalize;
    font-weight: bolder;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;

}
.el-icon-remove {
    color: #F56C6C;
    font-size:18px;
}
.number >>> .el-card__body{
    padding: 5px 10px;
}
</style>