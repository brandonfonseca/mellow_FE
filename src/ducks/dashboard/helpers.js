export const getDateAWeekAgo = () => {
  const date = new Date()
  date.setDate(date.getDate() - 7)
  return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
}

export const createGraphDataFromCheckins = checkIns => {
  const dashboardState = {
    mood: {},
    activity: {},
    sleep: {},
    water: {},
    nutrition: {},
    meditate: {}
  }
  checkIns.forEach(checkIn => {
    dashboardState.mood[checkIn.date_submitted] = checkIn.mood
    dashboardState.activity[checkIn.date_submitted] = checkIn.activity_rating
    dashboardState.sleep[checkIn.date_submitted] = checkIn.sleep_hours
    dashboardState.water[checkIn.date_submitted] = checkIn.cups_of_water
    dashboardState.nutrition[checkIn.date_submitted] = checkIn.nutrition_rating
    dashboardState.meditate[checkIn.date_submitted] = checkIn.did_meditate
  })
  return dashboardState
}
