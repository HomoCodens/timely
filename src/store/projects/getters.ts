import { GetterTree } from 'vuex'
import { ProjectsState } from './state'
import { Store } from '..'
import { Project } from 'src/components/models'

const getters: GetterTree<ProjectsState, Store> = {
  getProjectById (state: ProjectsState) {
    return (id: string) => {
      return state.projects.filter((x: Project) => x.id === id)[0]
    }
  },

  getActiveProject (state: ProjectsState) {
    return state.projects.filter((x: Project) => x.id === state.activeProject)[0]
  }
}

export default getters
