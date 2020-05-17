import { store } from 'quasar/wrappers'
import Vuex from 'vuex'

import projects from './projects'
import { ProjectsState } from './projects/state'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface Store {
  example: ProjectsState;
}

export default store(function ({ Vue }) {
  Vue.use(Vuex)

  const Store = new Vuex.Store<Store>({
    modules: {
      projects
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEV
  })

  return Store
})
