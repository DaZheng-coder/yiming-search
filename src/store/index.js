import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER (state, user) {
      localStorage.setItem('user', JSON.stringify(user))
      state.user = user
    },
    USER_OUT (state) {
      localStorage.removeItem('user')
      state.user = null
    }
  },
  actions: {
    setUser ({commit}, user) {
      commit('SET_USER', user)
    },
    userOut({commit}) {
      commit('USER_OUT')
    }
  },
  getters: {
    getUser (state) {
      let user = state.user || JSON.parse(localStorage.getItem('user'))
      return user
    }
  },
  modules: {
  }
})
