// initial state
import {
    getGeoApi,
    getVariantsDataApi
} from '../../api/api'

const state = () => ({
    activeCountry: 'china',
    countryVariantData:{},
    piePanelIsVisible: true,
    lan_long: {},
})

const getters = {}
const mutations = {
    setActiveCountry(state, payload) {
        state.activeCountry = payload
    },
    setVariantsData(state, payload) {
        state.countryVariantData = payload
    },
    setPiePanelIsVisible(state,payload) {
        state.piePanelIsVisible = payload
    },
    setGeo(state,payload) {
        state.lan_long = payload
    }
}
const actions = {
    async getVariantsData({commit}, args) {
        const response = await getVariantsDataApi(args)

        commit('setVariantsData', response.data)
    },
    async getGeo({commit}, args) {
        const response = await getGeoApi(args)

        commit('setGeo', response.data)
    },
}

export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
}