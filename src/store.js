import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },

  getters: {
    getDouble (state, getters) {
      return state.count * 2
    }
  },

  mutations: {
    increment (state, payload = {}) {
      return state.count += payload.number || 1
    },

    decrement (state) {
      return state.count--
    }
  },

  actions: {
    incrementAsync(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('increment', payload)
          resolve()
        }, 2000)
      })
    }
  }
})

export default store
