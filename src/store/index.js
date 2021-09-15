import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/http-api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cardList: [],
    blogDetails: {},
    cardCount: 0,
    categories: []
  },
  getters: {
    cardList (state) {
      return state.cardList
    },
    blogDetails (state) {
      return state.blogDetails
    },
    cardCount (state) {
      return state.cardCount
    },
    categories (state) {
      return state.categories
    }
  },
  mutations: {
    setCardList (state, data) {
      state.cardList = data
    },
    setCardCount (state, data) {
      state.cardCount = data
    },
    setBlogDetails (state, data) {
      state.blogDetails = data
    },
    setCategories (state, data) {
      state.categories = data
    }
  },
  actions: {
    getCategories ({commit}) {
      api.getCategories((response) => {
        commit('setCategories', response.data.categories)
      }, (error) => {
        console.error(error);
      })
    },
    getCardList ({commit}, params) {
      api.getCardList((response) => {
        commit('setCardList', response.data.posts)
        commit('setCardCount', response.data.found)
      }, (error) => {
        console.error(error);
      },
      params
      )
    },
    getBlogDetails ({commit}, params) {
      api.getBlogDetails((response) => {
        commit('setBlogDetails', response.data)
      }, (error) => {
        console.error(error);
      },
      params
      )
    }
  }
})

export default store
