const state = {
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
    },
    INCREMENT_LIKE(state, postDate) {
        const post = state.posts.find((p) => p.date === postDate);
        if (post) post.likes += 1;
    },
    RESET_LIKE(state, postDate) {
        const post = state.posts.find((p) => p.date === postDate);
        if (post) post.likes = 0;
    },
};

const actions = {
    async fetchPosts({ commit }) {
        commit('SET_LOADING', true);
        try {
            const response = await fetch('/public/json.json'); 
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            commit('SET_POSTS', data);
        } catch (error) {
            commit('SET_ERROR', error.message);
        } finally {
            commit('SET_LOADING', false);
        }
    },
    incrementLike({ commit }, postDate) {
        commit("INCREMENT_LIKE", postDate);
    },
    resetLike({ commit }, postDate) {
        commit("RESET_LIKE", postDate);
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