const state = {
    storeName: '',
    storeScore: 0,
    storeFloor: 0
}

const actions = {

}

const mutations = {
    STORE_INFO(state,payload) {
        state.storeName = payload.storeName
        state.storeScore = payload.storeScore
        state.storeFloor = payload.storeFloor
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}