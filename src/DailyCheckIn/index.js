import React from 'react'
import CheckInCard from '../CommonComponents/CheckInCard'
import moodLogo from '../Logos/CardHeaderLogos/mood.svg'
import waterLogo from '../Logos/CardHeaderLogos/water.svg'
import appleLogo from '../Logos/CardHeaderLogos/apple.svg'

import { moodOptions, waterOptions, nutritionOptions, activityOptions, sleepOptions, meditateOptions } from './constants'
import { DailyCheckInWrapper } from './DailyCheckIn.styles'

const DailyCheckIn = () => {
  return (
    <DailyCheckInWrapper>
      <CheckInCard title={'MOOD'} prompt={'How was your overall mood today?'}
        logo={moodLogo} options={moodOptions}/>
      <CheckInCard title={'WATER'} prompt={'How many cups of water did you drink today?'}
        logo={waterLogo} options={waterOptions}/>
      <CheckInCard title={'NUTRITION'} prompt={'How would you rate the nutritional value of your food today?'}
        logo={appleLogo} options={nutritionOptions}/>
      <CheckInCard title={'ACTIVITY'} prompt={'How active were you today?'}
        logo={appleLogo} options={activityOptions} extraSpacing={true}/>
      <CheckInCard title={'SLEEP'} prompt={'How many hours of sleep did you get last night?'}
        logo={appleLogo} options={sleepOptions}/>
      <CheckInCard title={'MEDITATE'} prompt={'Did you meditate today?'}
        logo={appleLogo} options={meditateOptions}/>
    </DailyCheckInWrapper>
  )
}

export default DailyCheckIn
