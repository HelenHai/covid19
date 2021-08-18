<template>
    <div>
        <v-chart
            id="map"
            class="chart"
            :option="map"
            :init-options="initOptions"
            ref="map"
            autoresize
            @click="handleClick"
            @legendselectchanged="handleLegendChanged"
        />
        <el-checkbox-group v-model="checkedLegend" class="checkbox">
            <el-checkbox
                v-for="item in legendList"
                :label="item"
                :key="item"
                @change="handleCheckboxChange(item)"
                class="checkbox-item"
            >{{ item }}
            </el-checkbox>
        </el-checkbox-group>
    </div>
</template>

<script>
import {init} from 'echarts'
import axios from 'axios'
import qs from "qs";
import VChart, {THEME_KEY} from "vue-echarts";
import {use, registerMap, registerTheme} from "echarts/core";
import {MapChart, ScatterChart, EffectScatterChart, CustomChart, PieChart} from "echarts/charts";

import {GeoComponent, LegendComponent} from "echarts/components";

import map from "../graphics/map";
import 'echarts/extension/bmap/bmap'
// custom theme
import theme from "../../common/assets/theme.json";
// Map of China
import chinaMap from "../../common/assets/country/china.json";
import AfghanistanMap from "../../common/assets/country/Afghanistan.json";
import worldMap from "../../common/assets/world.json";

import {mapState, mapActions, mapMutations} from 'vuex'

use([
    MapChart,
    PieChart,
    ScatterChart,
    EffectScatterChart,
    GeoComponent,
    LegendComponent,
    CustomChart,
]);
// registering map data
registerMap("china", chinaMap);
registerMap("afghanistan", AfghanistanMap);
registerMap("world", worldMap);

// registering custom theme
registerTheme("ovilia-green", theme);

const LegendOptions = ["Cases", "Vaccinations"];

export default {
    name: 'MapItem',
    components: {
        VChart,
    },
    computed: {},
    setup:()=>{
    },
    created() {
    },
    data() {
        const options = qs.parse(location.search, {ignoreQueryPrefix: true});
        return {
            options,
            map,
            initOptions: {
                renderer: options.renderer || "canvas"
            },
            checkedLegend: ["Cases"],
            legendList: LegendOptions,
            CheckboxFillColor: '#ddb926',
        };
    },
    methods: {
        ...mapMutations([
            'setActiveCountry'
        ]),
        ...mapActions([
            'getVariantsData',
            'getGeo',
        ]),
        handleClick({ name }) {
            this.setActiveCountry(name)
            this.getVariantsData(name)
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
        handleLegendChanged() {
        },
        handleCheckboxChange(name) {
            const map = this.$refs.map
            map.dispatchAction({
                type: 'legendToggleSelect',
                name
            })
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
};
</script>

<style scoped>
.chart {
    height: 550px;
}

.checkbox {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.checkbox-item {
    width: 130px;
    line-height: 20px;
    margin: 5px 0;
    text-align: left;
    font-weight: bolder;
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