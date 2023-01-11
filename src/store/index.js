import { createStore } from 'vuex'
import api from '../boot/api'

export default createStore({
  state: {
    addresses: [],
    menu: [],
    news: []
  },
  getters: {
    addresses: state => state.addresses,
    menu: state => state.menu,
    news: state => state.news
  },
  mutations: {
    SET_STATE (state, { data, payload }) {
      state[data] = payload
    }
  },
  actions: {
    async getAddresses ({ commit }) {
      const response = await api.get('addresses/landing')
      commit('SET_STATE', { data: 'addresses', payload: response.data.items })
    },
    async getMenu ({ commit }, [page = 0, size = 20]) {
      const response = await api.get(`nomenclatures/landing?page=${page}&size=${size}`)
      commit('SET_STATE', { data: 'menu', payload: response.data })
    },
    async getNews ({ commit }) {
      const response = await api.get('news/landing')
      console.log(response)
      commit('SET_STATE', { data: 'news', payload: response.data.items })
    }
  },
  modules: {
  }
})
