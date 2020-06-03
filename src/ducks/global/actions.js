export const NAMESPACE = 'mellow/global'
const ns = name => `${NAMESPACE}/${name}`

export const SET_CURRENT_TAB = ns`SET_CURRENT_TAB`

export const setCurrentTab = updatedTab => {
  return {
    type: SET_CURRENT_TAB,
    payload: updatedTab
  }
}
