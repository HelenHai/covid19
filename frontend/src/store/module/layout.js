// initial state
const state = () => ({
    items: [],
    navIsCollapse: false,
})

const getters = {}
const mutations = {
    setNavCollapse(state, payload) {
        console.log(state.navIsCollapse)
        state.navIsCollapse = !state.navIsCollapse
    }
}
const actions = {
    getNavCollapse(context) {
        context.commit('setNavCollapse')
    }
}

export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
}