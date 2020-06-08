import { ActionTree } from 'vuex'
import { Store } from '../index'
import { TimelineState } from './state'

const actions: ActionTree<TimelineState, Store> = {
  newBlock ({ commit }, { id }) {
    commit('START_NEW_BLOCK', id)
  },

  tick ({ commit }) {
    commit('TICK')
  }
}

export default actions
