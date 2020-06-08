import { ActionTree } from 'vuex'
import { Store } from '../index'
import { ProjectsState } from './state'

const actions: ActionTree<ProjectsState, Store> = {
  setActiveProject ({ state, dispatch, commit }, { id }) {
    if (state.activeProject !== id) {
      commit('SET_ACTIVE_PROJECT', id)
      dispatch('newBlock', { id })
    }
  }
}

export default actions
