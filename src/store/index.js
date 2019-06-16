import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    cart: [],
    parts: null
  },
  mutations: {
    addToStore (state, robot) {
      state.cart.push(robot)
    },
    updateParts (state, parts) {
      state.parts = parts
    }
    // removeFromCart (state, index) {
    //   state.cart.splice(index, 1)
    // }
  },
  getters: {
    addOnlySelled (state) {
      return state.cart.filter(item => item.head.onSale)
    },
    removeFromCart: (state) => (index) => {
      return state.cart.splice(index, 1)
    }
  },
  actions: {
    getParts ({ commit }) {
      axios.get('/api/parts').then(result => commit('updateParts', result.data))
        .catch(console.error)
    },
    addRobotToCart ({ commit, state }, robot) {
      const cart = [...state.cart, robot]
      return axios.post('/api/cart', cart)
        .then(() => commit('addToStore', robot))
    }
  }
})
