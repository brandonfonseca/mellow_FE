import {
  SET_CHOICE, DAILY_CHECK_IN_COMPLETED, UPDATE_SELECTIONS_STATE
  , UPDATE_SELECTIONS_ID
} from './dailyCheckIn/actions'
import { SET_CURRENT_TAB } from './global/actions'
import { UPDATE_DASHBOARD_STATE } from './dashboard/actions'
import { currentSelections } from './dailyCheckIn/constants'
import Immutable from 'immutable'
import { currentTab, dailyCheckInComplete } from './global/constants'
import { dashboardData } from './dashboard/constants'
import { DAILY_CHECK_IN } from '../Sidebar/constants'

const initialState = Immutable.fromJS({
  [currentTab]: DAILY_CHECK_IN,
  [currentSelections]: {
    id: -1,
    mood: null,
    water: null,
    nutrition: null,
    activity: null,
    sleep: null,
    meditate: null
  },
  [dailyCheckInComplete]: false,
  [dashboardData]: null
})
export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case SET_CHOICE:
      return state.setIn([currentSelections, action.payload.type], action.payload.choice)
    case DAILY_CHECK_IN_COMPLETED:
      return state.set(dailyCheckInComplete, true)
    case SET_CURRENT_TAB:
      return state.set(currentTab, action.payload)
    case UPDATE_SELECTIONS_STATE:
      return state.set(currentSelections, action.payload)
    case UPDATE_SELECTIONS_ID:
      return state.setIn([currentSelections, 'id'], action.payload)
    case UPDATE_DASHBOARD_STATE:
      return state.set(dashboardData, action.payload)
    default:
      return state
  }
}
