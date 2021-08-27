<template>
    <div class="panel-container">
        <p class="title">Detection ratio of Variants</p>
        <v-chart
            class="chart"
            :option="option"
            :init-options="initOptions"
            ref="pie"
            autoresize
        ></v-chart>
        <p class="footer" v-if="countryVariantData">As to {{format(countryVariantData.date)}}</p>
    </div>
</template>

<script>
import {init} from 'echarts'
import {mapState, mapActions, mapMutations} from 'vuex'
import {use} from "echarts/core";
import {CanvasRenderer} from "echarts/renderers";
import {PieChart} from "echarts/charts";
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent
} from "echarts/components";
import VChart, {THEME_KEY} from "vue-echarts";
import {ref, defineComponent} from "vue";
import qs from "qs";
import dateFormat from 'dateformat'

use([
    CanvasRenderer,
    PieChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent
]);
export default defineComponent({
    name: "VariantsPanel",
    components: {
        VChart
    },
    provide: {
        [THEME_KEY]: "white"
    },
    computed: {
        ...mapState({
            activeCountry: state => state.panel.activeCountry,
            countryVariantData: state => state.panel.countryVariantData,
        })
    },
    data() {
        const options = qs.parse(location.search, {ignoreQueryPrefix: true});
        return {
            options,
            isShow: true,
            initOptions: {
                renderer: options.renderer || "canvas"
            },
            countryName: this.activeCountry,
            option: {},
        }
    },

    async created() {
        this.countryName = "China"
        await this.getVariantsData(this.countryName)
    },
    mounted() {
        // this.startActions();
    },
    methods: {
        ...mapMutations([
           "setPiePanelIsVisible"
        ]),
        ...mapActions([
            "getVariantsData"
        ]),
        format(date) {
            return dateFormat(date,'longDate')
        },
        startActions() {
            let dataIndex = -1;
            const pie = this.$refs.pie;

            if (!pie) {
                return;
            }

            const dataLen = pie.option.series[0].data.length;

            this.actionTimer = setInterval(() => {
                pie.dispatchAction({
                    type: "downplay",
                    seriesIndex: 0,
                    dataIndex
                });
                dataIndex = (dataIndex + 1) % dataLen;
                pie.dispatchAction({
                    type: "highlight",
                    seriesIndex: 0,
                    dataIndex
                });
                // 显示 tooltip
                pie.dispatchAction({
                    type: "showTip",
                    seriesIndex: 0,
                    dataIndex
                });
            }, 1000);
        },
        stopActions() {
            clearInterval(this.actionTimer);
        }
    },

    watch: {
        activeCountry(newVal, oldVal) {
            this.countryName = newVal
        },
        countryVariantData: {
            handler(newVal, oldVal) {

                if (newVal) {
                    this.setPiePanelIsVisible(true)
                    const option = {
                        title: {
                            left: "center"
                        },
                        tooltip: {
                            trigger: "item",
                            formatter: "{a} <br/>{b} : {c} ({d}%)"
                        },
                        legend: {
                            // orient: "vertical",
                            left: "left",
                            data: ["Alpha", "Beta", "Delta", "Epsilon", "Eta", "Gamma", "Iota", "Kappa", "Lambda", "Others"]
                        },
                        series: [
                            {
                                name: "Variants",
                                type: "pie",
                                top: '15%',
                                radius: ['30%', '50%'],
                                minShowLabelAngle:0.01,
                                // roseType:"radius",
                                // radius: '50%',
                                // stillShowZeroSum: false, // 是否在数据和为0（一般情况下所有数据为0） 的时候仍显示扇区
                                itemStyle: {
                                    borderRadius: 10,
                                    borderColor: '#fff',
                                    borderWidth: 2
                                },
                                data: newVal.variants,
                                emphasis: {
                                    itemStyle: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: "rgba(0, 0, 0, 0.5)"
                                    }
                                }
                            }
                        ]
                    }
                    this.$refs.pie.setOption(option, true)
                } else {
                    this.setPiePanelIsVisible(false)

                    this.$notify({
                        title: 'Notification',
                        message: 'No Variants information in this area',
                        type:'info'
                    })
                }

            },
            deep: true
        },
    }
});
</script>

<style scoped>
.panel-container {
    line-height: 20px;
    height: 435px;
}

.title {
    font-family: sans-serif;
    color: #606266;
    font-weight: bolder;
    line-height: 14px;
}
.chart {
    height: 380px;
}
.footer {
    font-size: 10px;
    height: 20px;
}

</style>