import axios from 'axios'
import { createStore } from 'vuex'

// eslint-disable-next-line
/* eslint-disable */

export default createStore({
  state: {
    products: [],
    productsInBag: []
  },
  getters: {
  },
  mutations: {

    loadProducts(state,products) {
      state.products = products
    },

    addToBag(state,product) {
      state.productsInBag.push(product);
    }

  },
  actions: {

    async loadProducts({ commit }) {
      const produts = (await axios.get('https://fakestoreapi.com/products')).data;

      commit('loadProducts',produts);
    },

    async addToBag({ commit },product) {
      commit('addToBag',product)
    }

  },
  modules: {
  }
});
