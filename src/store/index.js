import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    app_drawer: false,
    user: {
      isLogin: null,
      isAdmin: null,
      username: "",
      avatar:""
    }
  },
  mutations: {
    TOGGLE_APP_DRAWER(state) {
      state.app_drawer = !state.app_drawer
    },
    LOGIN(state, user) {
      state.user = user
      window.localStorage.setItem('username', "OK sir")

    },
    LOGOUT(state) {

      state.user = {
        isLogin: null,
        isAdmin: null,
        username: "",
      }
      window.localStorage.removeItem('username')

    }
  },
  actions: {
  },
  modules: {
  }
})
