import { Timeblock } from 'components/models'

export interface TimelineState {
  timeblocks: Array<Timeblock>;
  paused: boolean;
}

const state: TimelineState = {
  timeblocks: [{
    projectId: '1',
    start: new Date(),
    end: new Date()
  }],
  paused: false
}

export default state
