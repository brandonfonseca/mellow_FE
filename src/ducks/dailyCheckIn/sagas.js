import { takeEvery, put, select } from 'redux-saga/effects'

import { SET_CHOICE, DAILY_CHECK_IN_COMPLETED } from './actions'
import { mapReduxToAPI, getDateToday } from './helpers'
import { currentSelectionSelector } from './selectors'

function * checkCompleteness () {
  const currentSelections = yield select(currentSelectionSelector)
  if (!currentSelections.valueSeq().includes(null)) {
    yield put({ type: DAILY_CHECK_IN_COMPLETED })
  }
}

function * updateCurrentSelections () {
  const currentSelections = yield select(currentSelectionSelector)
  const json = yield fetch('http://127.0.0.1:3001/check_ins?created_by=10',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        mood: mapReduxToAPI(currentSelections.get('mood')),
        date_submitted: getDateToday(),
        nutrition_rating: mapReduxToAPI(currentSelections.get('nutrition')),
        cups_of_water: mapReduxToAPI(currentSelections.get('water')),
        activity_rating: mapReduxToAPI(currentSelections.get('activity')),
        sleep_hours: mapReduxToAPI(currentSelections.get('sleep')),
        did_meditate: mapReduxToAPI(currentSelections.get('meditate'))
      })
    })
    .then(response => response.json())
  console.log(json)
}

function * dailyCheckInSaga () {
  yield takeEvery(SET_CHOICE, checkCompleteness)
  yield takeEvery(DAILY_CHECK_IN_COMPLETED, updateCurrentSelections)
}

export default dailyCheckInSaga
