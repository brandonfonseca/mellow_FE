export const NAMESPACE = 'mellow/dashboard'
const ns = name => `${NAMESPACE}/${name}`

export const GET_DASHBOARD_DATA = ns`SET_CHOICE`
export const UPDATE_DASHBOARD_STATE = ns`UPDATE_DASHBOARD_STATE`


export const getDashboardData = () => {
  return {
    type: GET_DASHBOARD_DATA
  }
}

export const updateDashboardState = (dashboardState) => {
  return {
    type: UPDATE_DASHBOARD_STATE,
    payload: dashboardState
  }
}
