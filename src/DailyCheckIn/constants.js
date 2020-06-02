import Immutable from 'immutable'
import {
  verySadLogo, sadLogo, mehLogo, happyLogo, veryHappyLogo,
  waterZero, waterOne, waterTwo, waterThree, waterFour, waterFive, waterSix, waterSeven, waterEight,
  appleOne, appleTwo, appleThree, appleFour, appleFive,
  activityLow, activityMedium, activityHigh,
  sleepZero, sleepOne, sleepTwo, sleepThree, sleepFour, sleepFive, sleepSix, sleepSeven, sleepEight,
  thumbDown, thumbUp
} from '../Logos'

export const MOOD = 'mood'
export const WATER = 'water'
export const NUTRITION = 'nutrition'
export const ACTIVITY = 'activity'
export const SLEEP = 'sleep'
export const MEDITATE = 'meditate'

export const moodOptions = Immutable.fromJS({
  'Very Sad': [verySadLogo, 'verySad'],
  Sad: [sadLogo, 'sad'],
  Meh: [mehLogo, 'meh'],
  Happy: [happyLogo, 'happy'],
  'Very Happy': [veryHappyLogo, 'veryHappy']
})

export const waterOptions = Immutable.fromJS({
  0: [waterZero, 'waterZero'],
  1: [waterOne, 'waterOne'],
  2: [waterTwo, 'waterTwo'],
  3: [waterThree, 'waterThree'],
  4: [waterFour, 'waterFour'],
  5: [waterFive, 'waterFive'],
  6: [waterSix, 'waterSix'],
  7: [waterSeven, 'waterSeven'],
  8: [waterEight, 'waterEight']
})

export const nutritionOptions = Immutable.fromJS({
  1: [appleOne, 'appleOne'],
  2: [appleTwo, 'appleTwo'],
  3: [appleThree, 'appleThree'],
  4: [appleFour, 'appleFour'],
  5: [appleFive, 'appleFive']
})

export const activityOptions = Immutable.fromJS({
  'Low Activity': [activityLow, 'activityLow'],
  'Medium Activity': [activityMedium, 'activityMedium'],
  'High Activity': [activityHigh, 'activityHigh']
})

export const sleepOptions = Immutable.fromJS({
  0: [sleepZero, 'sleepZero'],
  1: [sleepOne, 'sleepOne'],
  2: [sleepTwo, 'sleepTwo'],
  3: [sleepThree, 'sleepThree'],
  4: [sleepFour, 'sleepFour'],
  5: [sleepFive, 'sleepFive'],
  6: [sleepSix, 'sleepSix'],
  7: [sleepSeven, 'sleepSeven'],
  8: [sleepEight, 'sleepEight']
})

export const meditateOptions = Immutable.fromJS({
  No: [thumbDown, 'thumbDown'],
  Yes: [thumbUp, 'thumbUp']
})
