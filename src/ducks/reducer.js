import { SET_CHOICE } from './dailyCheckIn/actions'
import { SET_CURRENT_TAB } from './global/actions'
import { currentSelections } from './dailyCheckIn/constants'
import Immutable from 'immutable'
import { currentTab } from './global/constants'

const initialState = Immutable.fromJS({
  currentTab: '',
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
      return state.setIn([currentSelections, action.payload.type], action.payload.choice)
    case SET_CURRENT_TAB: {
      console.log(currentTab)
      console.log(action.payload.currentTab)
      console.log(action.payload)
      return state.set(currentTab, action.payload)
    }
    default:
      return state
  }
}
