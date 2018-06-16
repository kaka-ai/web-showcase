
import ProjectService from '@/services/ProjectService'

export default {
  namespaced: true,
  state: {
    projects: []
  },
  getters: {
    getProjects (state) {
      return state.projects
    }
  },
  mutations: {
    getProjects (state) {
      ProjectService.getAll().then((data) => {
        state.projects = data
      }, (error) => {
        console.log(error)
      })
    },
    loadDefaultData (state) {
      state.projects = []
    }
  },
  actions: {
    loadDefaultData (context) {
      context.commit('loadDefaultData')
    },
    getProjects (context) {
      context.commit('getProjects')
    }
  }
}
