import { SET_CHOICE } from './actions'
import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  currentSelections: {
    mood: null,
    water: null,
    nutrition: null,
    activity: null,
    sleep: null,
    meditate: null
  }
})
export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case SET_CHOICE:
      return state.setIn(['currentSelections', action.payload.type], action.payload.choice)
    default:
      return state
  }
}
