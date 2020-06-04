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
  'Very Sad': [verySadLogo, 'mood1'],
  Sad: [sadLogo, 'mood2'],
  Meh: [mehLogo, 'mood3'],
  Happy: [happyLogo, 'mood4'],
  'Very Happy': [veryHappyLogo, 'mood5']
})

export const waterOptions = Immutable.fromJS({
  0: [waterZero, 'water0'],
  1: [waterOne, 'water1'],
  2: [waterTwo, 'water2'],
  3: [waterThree, 'water3'],
  4: [waterFour, 'water4'],
  5: [waterFive, 'water5'],
  6: [waterSix, 'water6'],
  7: [waterSeven, 'water7'],
  8: [waterEight, 'water8']
})

export const nutritionOptions = Immutable.fromJS({
  1: [appleOne, 'nutrition1'],
  2: [appleTwo, 'nutrition2'],
  3: [appleThree, 'nutrition3'],
  4: [appleFour, 'nutrition4'],
  5: [appleFive, 'nutrition5']
})

export const activityOptions = Immutable.fromJS({
  'Low Activity': [activityLow, 'activity1'],
  'Medium Activity': [activityMedium, 'activity2'],
  'High Activity': [activityHigh, 'activity3']
})

export const sleepOptions = Immutable.fromJS({
  0: [sleepZero, 'sleep0'],
  1: [sleepOne, 'sleep1'],
  2: [sleepTwo, 'sleep2'],
  3: [sleepThree, 'sleep3'],
  4: [sleepFour, 'sleep4'],
  5: [sleepFive, 'sleep5'],
  6: [sleepSix, 'sleep6'],
  7: [sleepSeven, 'sleep7'],
  8: [sleepEight, 'sleep8']
})

export const meditateOptions = Immutable.fromJS({
  No: [thumbDown, 'meditate0'],
  Yes: [thumbUp, 'meditate1']
})
