const state = {
    username: window.localStorage.getItem('username') || 0,
    nickname: window.localStorage.getItem('nickname') || '',
    password: window.localStorage.getItem('password') || '',
    age: window.localStorage.getItem('age') || 0,
    gender: window.localStorage.getItem('gender') || 0,
    hometown: window.localStorage.getItem('hometown') || '',
    signature: window.localStorage.getItem('signature') || '',
}

const actions = {

}

const mutations = {
    USER_INFO(state,payload) {
        state.username = payload.username
        state.nickname = payload.nickname
        state.password = payload.password
        state.age = payload.age
        state.gender = payload.gender
        state.hometown = payload.hometown
        state.signature = payload.signature
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}