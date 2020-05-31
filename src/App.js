import React from 'react'
import Sidebar from './Sidebar'
import CheckInCard from './CommonComponents/CheckInCard'
import moodIcon from './Logos/CardHeaderLogos/mood.svg'

const App = () => {
  return (<><Sidebar/><CheckInCard title={'MOOD'} prompt={'How was your overall mood today?'} logo={moodIcon}/></>)
}

export default App
