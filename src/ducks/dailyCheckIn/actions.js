export const NAMESPACE = 'mellow/dailyCheckIn'
const ns = name => `${NAMESPACE}/${name}`

export const SET_CHOICE = ns`SET_CHOICE`
export const DAILY_CHECK_IN_COMPLETED = ns`DAILY_CHECK_IN_COMPLETED`

export const setOption = choice => {
  return {
    type: SET_CHOICE,
    payload: choice
  }
}

export const hey = payload => {
  return {
    type: DAILY_CHECK_IN_COMPLETED
  }
}
