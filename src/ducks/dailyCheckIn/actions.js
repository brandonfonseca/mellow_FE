export const NAMESPACE = 'mellow/dailyCheckIn'
const ns = name => `${NAMESPACE}/${name}`

export const SET_CHOICE = ns`SET_CHOICE`

export const setOption = choice => {
  return {
    type: SET_CHOICE,
    payload: choice
  }
}
