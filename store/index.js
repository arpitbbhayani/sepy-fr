import sepyService from '~/services/sepy'

const state = () => {
  return {
    error: null,
    progress: {}
  }
}

export const getters = {
  completed: (state) =>
    Object.keys(state.progress.parts_completed).filter(
      (x) => state.progress.parts_completed[x]
    ).length
}

export const mutations = {
  SET_ERROR: (state, error) => {
    state.error = error
  },
  SET_PROGRESS: (state, progress) => {
    state.progress = progress
  }
}

export const actions = {
  async nuxtClientInit({ dispatch }) {
    try {
      await dispatch('loadProgress')
    } catch (err) {
      this.err = err.message
    }
  },

  panic: ({ commit }, error) => {
    commit('SET_ERROR', error)
  },

  loadProgress: ({ commit }) => {
    return new Promise((resolve, reject) => {
      sepyService
        .getProgress()
        .then(({ progress }) => {
          commit('SET_PROGRESS', progress)
          resolve(progress)
        })
        .catch((err) => {
          commit('SET_ERROR', `${err.message}`)
          reject(err)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
