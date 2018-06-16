import Vue from 'vue'
import Vuex from 'vuex'
import ProjectModule from './ProjectModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    project: ProjectModule
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
