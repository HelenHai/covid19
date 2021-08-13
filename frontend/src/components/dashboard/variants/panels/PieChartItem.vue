<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, defineComponent } from "vue";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

export default defineComponent({
  name: "PieChart",
  components: {
    VChart
  },
  provide: {
    [THEME_KEY]: "white"
  },
  setup: () => {
    const option = ref({
      title: {
        text: "Detection ratio of mutant viruses in UK",
        left: "center"
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: "vertical",
        left: "left",
        data: ["B.1.525", "B.1.427 / B.1.429", "P.1", "B.1.351", "B.1.1.7"]
      },
      series: [
        {
          name: "Variants",
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: [
            { value: 335, name: "B.1.525" },
            { value: 310, name: "B.1.427 / B.1.429" },
            { value: 234, name: "P.1" },
            { value: 135, name: "B.1.351" },
            { value: 1548, name: "B.1.1.7" }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    });

    return { option };
  }
});
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>
