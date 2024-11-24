import { createStore } from 'vuex'
import posts from './posts';

export default createStore({
    strict: true,

    modules: {
        posts,
    },
    state: {},
    getters: {},
    mutations: {},
    actions: {}
})