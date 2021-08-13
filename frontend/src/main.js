import { createApp, h } from 'vue'
import store from './store/index'
import router from './router/index'
import ElementPlus from 'element-plus'
import ECharts from 'vue-echarts'
import { use } from "echarts/core"
import App from './App.vue'

import { CanvasRenderer,SVGRenderer } from 'echarts/renderers'
import {
    GridComponent,
    TooltipComponent,
    TitleComponent,
    VisualMapComponent,
    DatasetComponent,
    ToolboxComponent,
    DataZoomComponent
} from 'echarts/components'

// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';

import 'element-plus/lib/theme-chalk/index.css'
import './assets/style/index.css'
import './assets/style/common.css'

use([
    CanvasRenderer,
    SVGRenderer,
    GridComponent,
    TooltipComponent,
    TitleComponent,
    VisualMapComponent,
    DatasetComponent,
    ToolboxComponent,
    DataZoomComponent
])

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.component('v-chart', ECharts)
app.mount('#app')