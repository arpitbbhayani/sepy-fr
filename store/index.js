const state = () => {
  return {
    error: null
  }
}

export const getters = {}

export const mutations = {
  SET_ERROR: (state, error) => {
    state.error = error
  }
}

export const actions = {
  async nuxtClientInit({ dispatch }) {},

  panic: ({ commit }, error) => {
    commit('SET_ERROR', error)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
