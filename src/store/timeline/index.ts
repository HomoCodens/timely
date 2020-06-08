import { Module } from 'vuex'
import { Store } from '../index'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state, { TimelineState } from './state'

const module: Module<TimelineState, Store> = {
  namespaced: false,
  actions,
  getters,
  mutations,
  state
}

export default module
