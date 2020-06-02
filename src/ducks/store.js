import { createStore } from 'redux'
import dailyCheckInReducer from './dailyCheckIn/reducer'

export default createStore(dailyCheckInReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
