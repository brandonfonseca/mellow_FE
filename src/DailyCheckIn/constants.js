import Immutable from 'immutable'
import {
  verySadLogo, sadLogo, mehLogo, happyLogo, veryHappyLogo,
  waterZero, waterOne, waterTwo, waterThree, waterFour, waterFive, waterSix, waterSeven, waterEight,
  appleOne, appleTwo, appleThree, appleFour, appleFive,
  activityLow, activityMedium, activityHigh,
  sleepZero, sleepOne, sleepTwo, sleepThree, sleepFour, sleepFive, sleepSix, sleepSeven, sleepEight,
  thumbDown, thumbUp
} from '../Logos'

export const moodOptions = Immutable.fromJS({
  'Very Sad': verySadLogo,
  Sad: sadLogo,
  Meh: mehLogo,
  Happy: happyLogo,
  'Very Happy': veryHappyLogo
})

export const waterOptions = Immutable.fromJS({
  0: waterZero,
  1: waterOne,
  2: waterTwo,
  3: waterThree,
  4: waterFour,
  5: waterFive,
  6: waterSix,
  7: waterSeven,
  8: waterEight
})

export const nutritionOptions = Immutable.fromJS({
  1: appleOne,
  2: appleTwo,
  3: appleThree,
  4: appleFour,
  5: appleFive
})

export const activityOptions = Immutable.fromJS({
  'Low Activity': activityLow,
  'Medium Activity': activityMedium,
  'High Activity': activityHigh
})

export const sleepOptions = Immutable.fromJS({
  0: sleepZero,
  1: sleepOne,
  2: sleepTwo,
  3: sleepThree,
  4: sleepFour,
  5: sleepFive,
  6: sleepSix,
  7: sleepSeven,
  8: sleepEight
})

export const meditateOptions = Immutable.fromJS({
  No: thumbDown,
  Yes: thumbUp
})
