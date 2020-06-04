import { takeEvery, put, select } from 'redux-saga/effects'
import { baseAPIURL } from './constants'

import {
  SET_CHOICE, DAILY_CHECK_IN_COMPLETED, INIT_SELECTIONS,
  UPDATE_SELECTIONS_STATE, UPDATE_SELECTIONS_ID
} from './actions'
import { mapReduxToAPI, getDateToday, mapAPIToRedux, isEmpty } from './helpers'
import { currentSelectionSelector } from './selectors'

function * checkCompleteness () {
  const currentSelections = yield select(currentSelectionSelector)
  if (!currentSelections.valueSeq().includes(null)) {
    yield put({ type: DAILY_CHECK_IN_COMPLETED })
  }
}

function * initSelections () {
  const todaysDate = getDateToday()
  const checkIns = yield fetch(`${baseAPIURL}/between_dates?start_date=${todaysDate}&end_date=${todaysDate}?created_by=10`)
    .then(response => response.json())
  if (isEmpty(checkIns)) {
    return
  }
  const latestCheckIn = checkIns[checkIns.length - 1]
  yield put({ type: UPDATE_SELECTIONS_STATE, payload: mapAPIToRedux(latestCheckIn) })
}

function * updateCurrentSelectionsOnServer () {
  const currentSelections = yield select(currentSelectionSelector)
  let response = null
  const body = JSON.stringify({
    mood: mapReduxToAPI(currentSelections.get('mood')),
    date_submitted: getDateToday(),
    nutrition_rating: mapReduxToAPI(currentSelections.get('nutrition')),
    cups_of_water: mapReduxToAPI(currentSelections.get('water')),
    activity_rating: mapReduxToAPI(currentSelections.get('activity')),
    sleep_hours: mapReduxToAPI(currentSelections.get('sleep')),
    did_meditate: mapReduxToAPI(currentSelections.get('meditate')),
    created_by: 10
  })
  if (currentSelections.get('id') !== -1) {
    response = yield fetch(`${baseAPIURL}/${currentSelections.get('id')}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body
      })
      .then(response => response.json())
    console.log(response)
  } else {
    response = yield fetch(baseAPIURL,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body
      })
      .then(response => response.json())
    console.log(response)
  }
  yield put({ type: UPDATE_SELECTIONS_ID, payload: response.id })
}

function * dailyCheckInSaga () {
  yield takeEvery(SET_CHOICE, checkCompleteness)
  yield takeEvery(DAILY_CHECK_IN_COMPLETED, updateCurrentSelectionsOnServer)
  yield takeEvery(INIT_SELECTIONS, initSelections)
}

export default dailyCheckInSaga
