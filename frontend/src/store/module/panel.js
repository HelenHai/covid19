// initial state
import {
    getGeoApi, getNumberApi,
    getVariantsDataApi
} from '../../api/api'

const state = () => ({
    activeCountry: 'china',
    countryVariantData:{},
    piePanelIsVisible: true,
    numberData: {},
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
    setNumber(state,payload) {
        state.numberData = payload
    }
}
const actions = {
    async getVariantsData({commit}, args) {
        const response = await getVariantsDataApi(args)

        commit('setVariantsData', response.data)
    },
    async getNumbers({commit}, args) {
        const response = await getNumberApi(args)

        commit('setNumber', response.data)
    },
}

export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
}