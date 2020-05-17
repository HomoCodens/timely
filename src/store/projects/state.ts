import { Project } from 'components/models'

export interface ProjectsState {
  projects: Array<Project>;
  activeProject: number;
}

const state: ProjectsState = {
  projects: [
    {
      name: 'Project 1',
      id: '1',
      uiColor: '#ff0000'
    },
    {
      name: 'Project 2',
      id: '2',
      uiColor: '#00ff00'
    }
  ],
  activeProject: 0
}

export default state
