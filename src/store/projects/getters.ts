import { GetterTree } from 'vuex'
import { ProjectsState } from './state'
import { Store } from '..'

const getters: GetterTree<ProjectsState, Store> = {
  someAction (/* context */) {
    // your code
  }
}

export default getters
