import Immutable from 'immutable'

// this function returns the digit from the selection string
export const mapReduxToAPI = (selection) => {
  return parseInt(selection[selection.search(/\d/)])
}
export const getDateToday = () => {
  const today = new Date()
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0') // January is 0!
  const yyyy = today.getFullYear()
  return (yyyy + '/' + mm + '/' + dd)
}

const combineStrWithInt = (str, num) => str.concat('', num.toString())

export const mapAPIToRedux = (checkIn) => {
  return Immutable.fromJS({
    id: checkIn.id,
    mood: combineStrWithInt('mood', checkIn.mood),
    water: combineStrWithInt('water', checkIn.cups_of_water),
    nutrition: combineStrWithInt('nutrition', checkIn.nutrition_rating),
    activity: combineStrWithInt('activity', checkIn.activity_rating),
    sleep: combineStrWithInt('sleep', checkIn.sleep_hours),
    meditate: combineStrWithInt('meditate', checkIn.did_meditate ? 1 : 0)
  })
}

export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0
}
