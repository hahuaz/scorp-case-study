export const state = () => ({
  logRegType: null,
})

export const actions = {
  // async fetchForecast({ commit }, { adress }) {
  //   const forecast = await this.$axios.$get(`api/?adress=${adress}`)
  //   commit('ADD_FORECAST', forecast)
  // },
}

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
