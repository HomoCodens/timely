import { store } from 'quasar/wrappers'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import projects from './projects'
import { ProjectsState } from './projects/state'
import timeblocks from './timeline'
import { TimelineState } from './timeline/state'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface Store {
  projects: ProjectsState;
  timeblocks: TimelineState;
}

export default store(function ({ Vue }) {
  Vue.use(Vuex)

  const localPersist = new VuexPersistence({
    storage: window.localStorage
  })

  const Store = new Vuex.Store<Store>({
    modules: {
      projects,
      timeblocks
    },

    // plugins: [localPersist.plugin],

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEV
  })

  return Store
})
