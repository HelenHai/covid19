// where we assemble modules and export the store
import {createStore, createLogger} from "vuex";
import layout from './module/layout'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        layout
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})