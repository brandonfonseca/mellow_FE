import React from 'react'
import { render } from '@testing-library/react'
import { UnconnectedApp as App } from './App'

jest.mock('./dailyCheckIn/OptionsCard', () => () => <div>MockOptionsCard</div>)
jest.mock('./Sidebar', () => () => <div>MockSidebar</div>)
jest.mock('./dailyCheckIn', () => () => <div>MockDailyCheckIn</div>)

it('renders the base app', () => {
  const app = render(<App getDashboardData={() => {}} />)
  expect(app).toMatchSnapshot()
})
