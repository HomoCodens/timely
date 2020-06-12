import { MutationTree } from 'vuex'
import { TimelineState } from './state'

const mutation: MutationTree<TimelineState> = {
  START_NEW_BLOCK (state, id: string) {
    const now = new Date()

    state.timeblocks.push({
      projectId: id,
      start: now,
      end: now
    })
  },

  TICK (state) {
    if (state.timeblocks.length > 0 && !state.paused) {
      state.timeblocks[state.timeblocks.length - 1].end = new Date()
    }
  },

  SET_PAUSED (state, newPaused: boolean) {
    state.paused = newPaused
  }
}

export default mutation
