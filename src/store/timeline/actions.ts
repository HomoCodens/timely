import { ActionTree } from 'vuex'
import { Store } from '../index'
import { TimelineState } from './state'

const actions: ActionTree<TimelineState, Store> = {
  newBlock ({ commit }, { id }) {
    commit('START_NEW_BLOCK', id)
  },

  tick ({ commit }) {
    commit('TICK')
  },

  pause ({ dispatch, commit }) {
    dispatch('tick')
    commit('SET_PAUSED', true)
  },

  resume ({ dispatch, commit, rootState }) {
    dispatch('tick')
    commit('SET_PAUSED', false)
    dispatch('newBlock', { id: rootState.projects.activeProject })
  },

  togglePaused ({ state, dispatch }) {
    if (state.paused) {
      dispatch('resume')
    } else {
      dispatch('pause')
    }
  },

  resetTime ({ commit }) {
    commit('RESET_TIME')
  }
}

export default actions
