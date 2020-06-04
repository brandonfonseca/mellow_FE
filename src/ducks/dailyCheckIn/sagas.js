import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { SET_CHOICE } from './actions'

function * updateCurrentSelections (action) {
  console.log('hey')
}

function * dailyCheckInSaga () {
  yield takeEvery(SET_CHOICE, updateCurrentSelections)
}

export default dailyCheckInSaga
