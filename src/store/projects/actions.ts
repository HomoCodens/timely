import { ActionTree } from 'vuex'
import { Store } from '../index'
import { ProjectsState } from './state'

const actions: ActionTree<ProjectsState, Store> = {
  setActiveProject ({ state, dispatch, commit }, { id }) {
    if (state.activeProject !== id) {
      commit('SET_ACTIVE_PROJECT', id)
      dispatch('newBlock', { id })
    }
  },

  newProject ({ commit }) {
    commit('NEW_PROJECT')
  },

  renameProject ({ commit }, payload) {
    commit('SET_PROJECT_NAME', payload)
  }
}

export default actions
