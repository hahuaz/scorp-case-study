export const state = () => ({
  user: null,
  contactMessages: [],
})

export const actions = {
  async createUser({ commit }, payload) {
    try {
      await new Promise((resolve, reject) => setTimeout(resolve, 1000))
      commit('SET_USER', payload)
    } catch (error) {
      console.error(error)
      throw new Error("Couldn't create user!")
    }
  },
  async createMessage({ commit }, payload) {
    try {
      await new Promise((resolve, reject) => setTimeout(resolve, 1000))
      commit('PUSH_MESSAGE', payload)
    } catch (error) {
      console.error(error)
      throw new Error("Couldn't create message!")
    }
  },
}

export const mutations = {
  SET_USER(state, payload) {
    state.user = payload
  },
  PUSH_MESSAGE(state, payload) {
    state.contactMessages.push(payload)
  },
}
