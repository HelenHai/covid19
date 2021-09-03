// where we assemble modules and export the store
import {createStore, createLogger} from "vuex";
import layout from './module/layout'
import panel from "./module/panel";

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        layout,
        panel
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})