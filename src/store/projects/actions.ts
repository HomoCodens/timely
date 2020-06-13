import { ActionTree } from 'vuex'
import { Store } from '../index'
import { ProjectsState } from './state'
import { getRandomColor } from '../../utils'

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
  },

  removeProject ({ commit }, id) {
    commit('REMOVE_PROJECT', id)
  },

  changeColor ({ commit }, payload) {
    commit('SET_PROJECT_COLOR', payload)
  },

  randomizeColor ({ commit }, id) {
    const payload = {
      id,
      color: getRandomColor()
    }
    commit('SET_PROJECT_COLOR', payload)
  }
}

export default actions
