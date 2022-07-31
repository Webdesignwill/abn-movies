import axios from 'axios'

export default {
  namespaced: true,

  state: {
    show: {},
  },

  mutations: {
    SET_SHOW(state, boolean) {
      state.fetching = boolean
    },

    SET_FETCHING_STATE(state, boolean) {
      state.fetching = boolean
    },

    SET_ERROR_STATE(state, boolean) {
      state.error = boolean
    },
  },

  actions: {
    FETCH({ commit }, id) {
      commit('SET_ERROR_STATE', false)
      commit('SET_FETCHING_STATE', true)

      axios
        .get(`/lookup/shows?imdb=${id}`)
        .then((res) => {
          console.log(res)
          commit('SET_SHOW', res.data)
          commit('SET_FETCHING_STATE', false)
        })
        .catch(() => {
          commit('SET_FETCHING_STATE', false)
          commit('SET_ERROR_STATE', true)
        })
    },
  },
}
