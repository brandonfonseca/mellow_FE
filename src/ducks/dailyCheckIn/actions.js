export const NAMESPACE = 'mellow/dailyCheckIn'
const ns = name => `${NAMESPACE}/${name}`

export const SET_CHOICE = ns`SET_CHOICE`
export const DAILY_CHECK_IN_COMPLETED = ns`DAILY_CHECK_IN_COMPLETED`
export const INIT_SELECTIONS = ns`INIT_SELECTIONS`
export const UPDATE_SELECTIONS_STATE = ns`UPDATE_SELECTIONS_STATE`

export const setOption = choice => {
  return {
    type: SET_CHOICE,
    payload: choice
  }
}

export const initSelections = () => {
  return {
    type: INIT_SELECTIONS
  }
}

export const dailyCheckInCompleted = () => {
  return {
    type: DAILY_CHECK_IN_COMPLETED
  }
}

export const updateSelectionsState = selections => {
  return {
    type: UPDATE_SELECTIONS_STATE,
    payload: selections
  }
}
