// this function returns the digit from the selection string
export const mapReduxToAPI = (selection) => {
  return parseInt(selection[selection.search(/\d/)])
}
export const getDateToday = () => {
  const today = new Date()
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0') // January is 0!
  const yyyy = today.getFullYear()
  return (mm + '/' + dd + '/' + yyyy)
}
