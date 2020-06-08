import { Timeblock } from 'components/models'

export interface TimelineState {
  timeblocks: Array<Timeblock>;
}

const state: TimelineState = {
  timeblocks: [{
    projectId: '1',
    start: new Date(),
    end: new Date()
  }]
}

export default state
