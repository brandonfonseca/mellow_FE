import { createStore } from 'redux'
import primaryReducer from './reducer'

export default createStore(primaryReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
