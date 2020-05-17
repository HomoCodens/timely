import { Module } from 'vuex'
import { Store } from '../index'
import state, { ProjectsState } from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const module: Module<ProjectsState, Store> = {
  namespaced: false,
  actions,
  getters,
  mutations,
  state
}

export default module
