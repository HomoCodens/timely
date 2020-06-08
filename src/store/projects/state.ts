import { Project } from 'components/models'

export interface ProjectsState {
  projects: Array<Project>;
  activeProject: string;
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
  activeProject: '1'
}

export default state
