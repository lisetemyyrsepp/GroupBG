const state = {
    posts: [],
    loading: false,
    error: null,
};

const mutations = {
    setPosts(state, posts) {
      state.allPosts = posts;
    },
    incrementLike(state, postDate) {
      const post = state.allPosts.find((p) => p.date === postDate);
      if (post) {
        post.likes += 1;
      }
    },
    resetLikes(state) {
      state.allPosts.forEach((post) => {
        post.likes = 0;
      });
    },
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setError(state, error) {
      state.error = error;
    },
  };

  const actions = {
    async fetchPosts({ commit }) {
      commit("setLoading", true);
      try {
        const response = await fetch("/json.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // Add a default likes property if not present
        const postsWithLikes = data.map((post) => ({
          ...post,
          likes: post.likes || 0,
        }));
        commit("setPosts", postsWithLikes);
      } catch (error) {
        commit("setError", error.message);
      } finally {
        commit("setLoading", false);
      }
    },
  };

export default {
    namespaced: true,
    state,
    mutations,
    actions,
  };