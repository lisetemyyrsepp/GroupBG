import axios from "axios";

const state = {
    axiosInstance: axios.create({
        baseURL: 'http://localhost:3000',
        withCredentials: true,
    }),
    posts: [],
    loading: false,
    error: null,
};

const mutations = {
    SET_POSTS(state, posts) {
        state.posts = posts;
    },
    SET_LOADING(state, loading) {
        state.loading = loading;
    },
    SET_ERROR(state, error) {
        state.error = error;
    }
};

const actions = {
    async fetchPosts({ commit }) {
        commit('SET_LOADING', true);
        try {
            const res = await state.axiosInstance.get('/api/posts')
            if (res.status === 200) {
                commit('SET_POSTS', res.data);
            }
        } catch (error) {
            console.log(error)
            commit('SET_ERROR', error.message);
        } finally {
            commit('SET_LOADING', false);
        }
    },
};

const getters = {
    allPosts: (state) => state.posts,
    isLoading: (state) => state.loading,
    error: (state) => state.error,
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};