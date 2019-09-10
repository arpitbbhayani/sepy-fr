const state = () => {
  return {
    messages: []
  }
}

export const getters = {}

export const mutations = {
  ADD_MESSAGE: (state, { message, type }) => {
    if (message && !state.messages.find((x) => x.message === message)) {
      state.messages.push({ message, type })
    }
  },
  REMOVE_MESSAGE: (state, message) => {
    state.messages = state.messages.filter((x) => x.message !== message)
  },
  REMOVE_MESSAGES: (state) => {
    state.messages = []
  }
}

export const actions = {
  publishMessage: ({ commit }, { message, type }) => {
    commit('ADD_MESSAGE', { type, message })
  },
  discardMessage: ({ commit }, message) => {
    commit('REMOVE_MESSAGE', message)
  },
  discardAllMessages: ({ commit }) => {
    commit('REMOVE_MESSAGES')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
