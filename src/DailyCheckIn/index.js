import React from 'react'
import OptionsCard from '../CommonComponents/OptionsCard'
import moodLogo from '../Logos/CardHeaderLogos/mood.svg'
import waterLogo from '../Logos/CardHeaderLogos/water.svg'
import appleLogo from '../Logos/CardHeaderLogos/apple.svg'
import weightLogo from '../Logos/CardHeaderLogos/weight.svg'
import moonLogo from '../Logos/CardHeaderLogos/moon.svg'
import flowerLogo from '../Logos/CardHeaderLogos/flower.svg'

import {
  MOOD, WATER, NUTRITION, ACTIVITY, SLEEP, MEDITATE,
  moodOptions, waterOptions, nutritionOptions, activityOptions,
  sleepOptions, meditateOptions
} from './constants'
import { DailyCheckInWrapper } from './DailyCheckIn.styles'

const DailyCheckIn = () => {
  return (
    <DailyCheckInWrapper>
      <OptionsCard title={MOOD} prompt={'How was your overall mood today?'}
        logo={moodLogo} options={moodOptions}/>
      <OptionsCard title={WATER} prompt={'How many cups of water did you drink today?'}
        logo={waterLogo} options={waterOptions}/>
      <OptionsCard title={NUTRITION} prompt={'How would you rate the nutritional value of your food today?'}
        logo={appleLogo} options={nutritionOptions}/>
      <OptionsCard title={ACTIVITY} prompt={'How active were you today?'}
        logo={weightLogo} options={activityOptions} extraSpacing={true}/>
      <OptionsCard title={SLEEP} prompt={'How many hours of sleep did you get last night?'}
        logo={moonLogo} options={sleepOptions}/>
      <OptionsCard title={MEDITATE} prompt={'Did you meditate today?'}
        logo={flowerLogo} options={meditateOptions}/>
    </DailyCheckInWrapper>
  )
}

export default DailyCheckIn
