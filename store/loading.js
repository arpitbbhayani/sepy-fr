const state = () => {
  return {
    loading: false
  }
}

export const getters = {}

export const mutations = {
  START: (state) => {
    state.loading = true
  },
  STOP: (state, message) => {
    state.loading = false
  }
}

export const actions = {
  start: ({ commit }) => {
    commit('START')
  },
  stop: ({ commit }) => {
    commit('STOP')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
