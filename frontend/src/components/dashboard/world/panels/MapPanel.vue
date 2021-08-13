<template>
    <figure style="background-color: #404a59">
        <v-chart
            class="chart"
            :option="map"
            :init-options="initOptions"
            ref="map"
            autoresize
        />
    </figure>

</template>

<script>
import qs from "qs";
import VChart, { THEME_KEY } from "vue-echarts";
import {ref} from "vue";
import { use, registerMap, registerTheme } from "echarts/core";
import { MapChart, ScatterChart, EffectScatterChart } from "echarts/charts";

import { GeoComponent,LegendComponent} from "echarts/components";

import {CanvasRenderer, SVGRenderer} from "echarts/renderers";

import getBar from "../../common/data/bar";

import map from "../graphics/map";
// custom theme
import theme from "../../common/assets/theme.json";
// Map of China
import chinaMap from "../../common/assets/china.json";
import worldMap from "../../common/assets/world.json";

use([
    MapChart,
    ScatterChart,
    EffectScatterChart,
    GeoComponent,
    LegendComponent,
    CanvasRenderer,
    SVGRenderer,
]);
// registering map data
registerMap("china", chinaMap);
registerMap("world", worldMap);

// registering custom theme
registerTheme("ovilia-green", theme);

export default {
    name: 'MapItem',
    components: {
        VChart,
    },
    data() {
        const options = qs.parse(location.search, {ignoreQueryPrefix: true});
        return {
            options,
            map,
            initOptions: {
                renderer: options.renderer || "canvas"
            },
        };
    },
    methods: {
        handleClick(...args) {
            console.log("click from echarts", ...args);
        },
        handleZrClick(...args) {
            console.log("click from zrender", ...args);
        },
        toggleRenderer() {
            if (this.initOptions.renderer === "canvas") {
                this.initOptions.renderer = "svg";
            } else {
                this.initOptions.renderer = "canvas";
            }
        },
        convert() {
            const map = this.$refs.map;
            this.img = {
                src: map.getDataURL({
                    pixelRatio: window.devicePixelRatio || 1
                }),
                width: map.getWidth(),
                height: map.getHeight()
            };
            this.open = true;
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
        "initOptions.renderer"(value) {
            this.options.renderer = value === "svg" ? value : undefined;
            let query = qs.stringify(this.options);
            query = query ? "?" + query : "";
            history.pushState(
                {},
                document.title,
                `${location.origin}${location.pathname}${query}${location.hash}`
            );
        },
    },
    mounted() {
        this.startActions();
    },
};
</script>

<style scoped>
.chart {
    height: 400px;
}
figure {
    display: inline-block;
    position: relative;
    margin: 2em auto;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    box-shadow: 0 0 45px rgba(0, 0, 0, 0.2);
    padding: 1.5em 2em;
    min-width: calc(40vw + 4em);

.echarts {
    width: 100%;
    width: 40vw;
    min-width: 400px;
    height: 300px;
}

}
#logo {
    display: inline-block;
    width: 128px;
    height: 128px;
    pointer-events: none;
}

.modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1;

&
.open {
    display: block;
}

img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #404a59;
    max-width: 80vw;
    border: 2px solid #fff;
    border-radius: 3px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
}

}
@media (min-width: 980px) {
    figure.half {
        padding: 1em 1.5em;
        min-width: calc(240px + 3em);

    .echarts {
        width: 28vw;
        min-width: 240px;
        height: 180px;
    }

&:not(:last-child) {
     margin-right: 15px;
 }
}

}
@media (max-width: 980px) {
    p {
        display: flex;
        justify-content: center;

    select {
        text-indent: calc(50% - 1em);
    }

    select,
    label {
        border: 1px solid #4fc08d;
        border-radius: 2em;
        background-color: #fff;
        color: #42b983;
        cursor: pointer;
        transition: opacity 0.3s;
    }

    button,
    input,
    select,
    label {
        flex: 1 0;
        margin: 0 0.5em;
        padding: 0;
        line-height: 2.4em;
        max-width: 40vw;
        border-radius: 2px;
        font-size: 0.8em;
    }

    select {
        -webkit-appearance: none;
    }

    input[type="checkbox"] {
        display: none;

&:checked + label {
     background: #42b983;
     color: #fff;
 }
}

}
figure {
    width: 100vw;
    margin: 1em auto;
    padding: 1em 0;
    border: none;
    border-radius: 0;
    box-shadow: none;

.echarts {
    width: 100%;
    min-width: 0;
    height: 75vw;
}

}
}
.renderer {
    position: fixed;
    top: 10px;
    left: 10px;
    font-size: 16px;
    text-align: center;

button {
    float: left;
    position: relative;
    width: 64px;
    border-radius: 6px;
    border-color: #36485e;
    color: rgba(54, 72, 94, 0.8);
    font-weight: 500;

&
:focus-visible {
    box-shadow: 0 0 1px #36485e;
}

&
:active {
    background: rgba(54, 72, 94, 0.2);
}

&
.active {
    z-index: 1;
    background-color: #36485e;
    color: #fff;
}

&
:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

&
:last-child {
    left: -1px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

}
}
</style>