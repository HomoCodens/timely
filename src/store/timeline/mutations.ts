import { MutationTree } from 'vuex'
import { TimelineState } from './state'

const mutation: MutationTree<TimelineState> = {
  START_NEW_BLOCK (state, id: string) {
    const now = new Date()
    if (state.timeblocks.length > 0) {
      state.timeblocks[state.timeblocks.length - 1].end = now
    }
    state.timeblocks.push({
      projectId: id,
      start: now,
      end: now
    })
  },

  TICK (state) {
    if (state.timeblocks.length > 0) {
      state.timeblocks[state.timeblocks.length - 1].end = new Date()
    }
  }
}

export default mutation
