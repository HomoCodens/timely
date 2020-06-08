import { MutationTree } from 'vuex'
import { ProjectsState } from './state'

const mutation: MutationTree<ProjectsState> = {
  SET_ACTIVE_PROJECT (state, id) {
    state.activeProject = id
  }
}

export default mutation
