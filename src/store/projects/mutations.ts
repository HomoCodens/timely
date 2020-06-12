import { MutationTree } from 'vuex'
import { ProjectsState } from './state'
import { v4 } from 'uuid'

const mutation: MutationTree<ProjectsState> = {
  SET_ACTIVE_PROJECT (state: ProjectsState, id: string) {
    state.activeProject = id
  },

  NEW_PROJECT (state: ProjectsState) {
    state.projects.push({
      name: `Project ${state.projects.length}`,
      uiColor: '#000000',
      id: v4()
    })
  },

  SET_PROJECT_NAME (state: ProjectsState, { id, newName }) {
    const i = state.projects.map((x, i) => { return { index: i, project: x } }).filter(({ project }) => project.id === id)[0].index
    state.projects[i].name = newName
  }
}

export default mutation
