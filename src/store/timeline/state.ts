import { Timeblock } from 'components/models'

export interface TimelineState {
  timeblocks: Array<Timeblock>;
  paused: boolean;
}

const state: TimelineState = {
  timeblocks: [],
  paused: true
}

export default state
