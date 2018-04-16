import Vue from 'vue'
import Vuex from 'vuex'
import ProjectStore from './project-store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    project: ProjectStore
  },
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  }
})
