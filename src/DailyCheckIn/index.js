import React from 'react'
import PropTypes from 'prop-types'
import OptionsCard from './OptionsCard'
import moodLogo from '../logos/CardHeaderLogos/mood.svg'
import waterLogo from '../logos/CardHeaderLogos/water.svg'
import appleLogo from '../logos/CardHeaderLogos/apple.svg'
import weightLogo from '../logos/CardHeaderLogos/weight.svg'
import moonLogo from '../logos/CardHeaderLogos/moon.svg'
import flowerLogo from '../logos/CardHeaderLogos/flower.svg'

import { connect } from 'react-redux'
import { initSelections } from '../ducks/dailyCheckIn/actions'

import {
  MOOD, WATER, NUTRITION, ACTIVITY, SLEEP, MEDITATE,
  moodOptions, waterOptions, nutritionOptions, activityOptions,
  sleepOptions, meditateOptions
} from './constants'
import { DailyCheckInWrapper } from './DailyCheckIn.styles'

export const UnconnectedDailyCheckIn = ({ initSelections }) => {
  initSelections()
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
UnconnectedDailyCheckIn.propTypes = {
  initSelections: PropTypes.func.isRequired
}

UnconnectedDailyCheckIn.defaultProps = {
  initSelections: () => {}
}
export default connect(null, { initSelections })(UnconnectedDailyCheckIn)
