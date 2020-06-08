import { GetterTree } from 'vuex'
import { Store } from '..'
import { TimelineState } from './state'
import { Timeblock } from 'src/components/models'

const getters: GetterTree<TimelineState, Store> = {
  projectAggregate (state) {
    const agg = state.timeblocks.reduce((acc: Record<string, any>, x: Timeblock) => {
      if (acc[x.projectId] === undefined) {
        acc[x.projectId] = 0
      }
      acc[x.projectId] += x.end.valueOf() - x.start.valueOf()
      return acc
    }, {})

    return Object.entries(agg).map(([id, time]) => {
      return {
        name: id,
        time
      }
    })
  }
}

export default getters
