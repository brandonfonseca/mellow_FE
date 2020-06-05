import Immutable from 'immutable'
import Reducer from './reducer'
import { createStore } from 'redux'
import { currentTab, dailyCheckInComplete } from './global/constants'
import { DAILY_CHECK_IN } from '../Sidebar/constants'
import { dashboardData } from './dashboard/constants'
import { currentSelections } from './dailyCheckIn/constants'
import { setChoice, updateSelectionsState, updateSelectionsId, dailyCheckInCompleted } from './dailyCheckIn/actions'
import { currentSelectionSelector } from './dailyCheckIn/selectors'
import { mapAPIToRedux } from './dailyCheckIn/helpers'
import { currentTabSelector } from './global/selectors'
import { setCurrentTab } from './global/actions'
import { currentDashboardDataSelector } from './dashboard/selectors'
import { updateDashboardState } from './dashboard/actions'

const mockAPIResponse = {
  activity_rating: 1,
  created_by: 10,
  cups_of_water: 4,
  date_submitted: '2020-06-04',
  did_meditate: true,
  id: 54,
  mood: 5,
  nutrition_rating: 2,
  sleep_hours: 8
}

const mockStateBasedOnAPIResponse = {
  id: 54,
  mood: 'mood5',
  water: 'water4',
  nutrition: 'nutrition2',
  activity: 'activity1',
  sleep: 'sleep8',
  meditate: 'meditate1'
}
describe('rootDucks', () => {
  let store
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
  beforeEach(() => {
    store = createStore(Reducer, initialState)
  })

  it('adds selected option to the state when the setChoice action is dispatched', () => {
    const category = 'mood'
    const mockChoice = 'mockChoice'
    expect(currentSelectionSelector(store.getState()).get(category)).toBeNull()
    store.dispatch(
      setChoice({ type: category, choice: mockChoice })
    )
    expect(currentSelectionSelector(store.getState()).get(category)).toEqual(mockChoice)
  })

  it('updates the entire selection in the state when the updateSelectionsState action is dispatched', () => {
    expect(currentSelectionSelector(store.getState())).toEqual(initialState.get(currentSelections))
    store.dispatch(
      updateSelectionsState(mapAPIToRedux(mockAPIResponse))
    )
    expect(currentSelectionSelector(store.getState()))
      .toEqual(Immutable.fromJS(mockStateBasedOnAPIResponse))
  })

  it('updates the selection id in the state when the updateSelectionsId action is dispatched', () => {
    const mockId = 5
    expect(currentSelectionSelector(store.getState()).get('id'))
      .toEqual(initialState.getIn([currentSelections, 'id']))
    store.dispatch(
      updateSelectionsId(5)
    )
    expect(currentSelectionSelector(store.getState()).get('id')).toEqual(mockId)
  })

  it('updates the daily check in completion status field in the state when the dailyCheckInCompleted action is dispatched', () => {
    expect(store.getState().get(dailyCheckInComplete)).toBe(false)
    store.dispatch(dailyCheckInCompleted())
    expect(store.getState().get(dailyCheckInComplete)).toBe(true)
  })

  it('updates the current tab in the state when the setCurrentTab action is dispatched', () => {
    const mockTab = 'mockTab'
    expect(currentTabSelector(store.getState())).toBe(initialState.get(currentTab))
    store.dispatch(setCurrentTab(mockTab))
    expect(currentTabSelector(store.getState())).toBe(mockTab)
  })

  it('updates the dashboard state when the updateDashboardState action is dispatched', () => {
    const mockDashboardData = [{ mock_key: 'mock_value' }]
    expect(currentDashboardDataSelector(store.getState())).toBe(initialState.get(dashboardData))
    store.dispatch(updateDashboardState(mockDashboardData))
    expect(currentDashboardDataSelector(store.getState())).toBe(mockDashboardData)
  })
})
