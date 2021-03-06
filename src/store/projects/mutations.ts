import { MutationTree } from 'vuex'
import { ProjectsState } from './state'
import { v4 } from 'uuid'
import { getRandomColor } from '../../utils'

const mutation: MutationTree<ProjectsState> = {
  SET_ACTIVE_PROJECT (state: ProjectsState, id: string) {
    state.activeProject = id
  },

  NEW_PROJECT (state: ProjectsState) {
    state.projects.push({
      name: `Project ${state.projects.length + 1}`,
      // https://jsfiddle.net/fouadb/k642erLm/1
      uiColor: getRandomColor(),
      id: v4()
    })
  },

  SET_PROJECT_NAME (state: ProjectsState, { id, newName }) {
    const i = state.projects.map((x, i) => { return { index: i, project: x } }).filter(({ project }) => project.id === id)[0].index
    state.projects[i].name = newName
  },

  SET_PROJECT_COLOR (state: ProjectsState, { id, color }) {
    const i = state.projects.map((x, i) => { return { index: i, project: x } }).filter(({ project }) => project.id === id)[0].index
    state.projects[i].uiColor = color
  },

  REMOVE_PROJECT (state: ProjectsState, id: string) {
    state.projects = state.projects.filter((p) => p.id !== id)
    if (state.activeProject === id) {
      state.activeProject = state.projects[0].id
    }
  }
}

export default mutation
