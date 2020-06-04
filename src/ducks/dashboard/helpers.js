export const getDateAWeekAgo = () => {
  const date = new Date()
  date.setDate(date.getDate() - 7)
  return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
}

export const createGraphDataFromCheckins = checkIns => {
  const dashboardState = {
    mood: [],
    activity: [],
    sleep: [],
    water: [],
    nutrition: [],
    meditate: []
  }
  checkIns.forEach(checkIn => {
    dashboardState.mood.push({ date: checkIn.date_submitted, value: checkIn.mood })
    dashboardState.activity.push({ date: checkIn.date_submitted, value: checkIn.activity_rating })
    dashboardState.sleep.push({ date: checkIn.date_submitted, value: checkIn.sleep_hours })
    dashboardState.water.push({ date: checkIn.date_submitted, value: checkIn.cups_of_water })
    dashboardState.nutrition.push({ date: checkIn.date_submitted, value: checkIn.nutrition_rating })
    dashboardState.meditate.push({ date: checkIn.date_submitted, value: checkIn.did_meditate })
  })
  for (const element in dashboardState) {
    dashboardState[element].sort((a, b) => a.date > b.date ? 1 : -1)
  }

  return dashboardState
}
