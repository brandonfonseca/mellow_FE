import { takeEvery, put, select } from 'redux-saga/effects'
import { baseAPIURL } from './constants'

import {
  SET_CHOICE, DAILY_CHECK_IN_COMPLETED, INIT_SELECTIONS,
  UPDATE_SELECTIONS_STATE
} from './actions'
import { mapReduxToAPI, getDateToday, mapAPIToRedux } from './helpers'
import { currentSelectionSelector } from './selectors'

function * checkCompleteness () {
  const currentSelections = yield select(currentSelectionSelector)
  if (!currentSelections.valueSeq().includes(null)) {
    yield put({ type: DAILY_CHECK_IN_COMPLETED })
  }
}

function * initSelections () {
  const todaysDate = getDateToday()
  const checkIns = yield fetch(`${baseAPIURL}/between_dates?start_date=${todaysDate}&end_date=${todaysDate}`)
    .then(response => response.json())
  const latestCheckIn = checkIns[checkIns.length - 1]
  yield put({ type: UPDATE_SELECTIONS_STATE, payload: mapAPIToRedux(latestCheckIn) })
}

function * updateCurrentSelectionsOnServer () {
  const currentSelections = yield select(currentSelectionSelector)
  yield fetch(baseAPIURL,
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
}

function * dailyCheckInSaga () {
  yield takeEvery(SET_CHOICE, checkCompleteness)
  yield takeEvery(DAILY_CHECK_IN_COMPLETED, updateCurrentSelectionsOnServer)
  yield takeEvery(INIT_SELECTIONS, initSelections)
}

export default dailyCheckInSaga
