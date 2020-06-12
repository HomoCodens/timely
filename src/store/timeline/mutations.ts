import { MutationTree } from 'vuex'
import { TimelineState } from './state'

const mutation: MutationTree<TimelineState> = {
  START_NEW_BLOCK (state, id: string) {
    const now = new Date().valueOf()

    state.timeblocks.push({
      projectId: id,
      start: now,
      end: now
    })
  },

  TICK (state) {
    if (state.timeblocks.length > 0 && !state.paused) {
      state.timeblocks[state.timeblocks.length - 1].end = new Date().valueOf()
    }
  },

  SET_PAUSED (state, newPaused: boolean) {
    state.paused = newPaused
  },

  RESET_TIME (state) {
    state.timeblocks = []
    state.paused = true
  }
}

export default mutation
