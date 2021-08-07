export const state = () => ({
  logRegType: null,
})

export const actions = {}

export const mutations = {
  toggleLogRegType(state) {
    state.logRegType === 'login'
      ? (state.logRegType = 'register')
      : (state.logRegType = 'login')
  },
  toggleLogRegVisibility(state) {
    state.logRegType === null
      ? (state.logRegType = 'login')
      : (state.logRegType = null)
  },
}
