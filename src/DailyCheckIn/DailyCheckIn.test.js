import React from 'react'
import { render } from '@testing-library/react'
import DailyCheckIn from '.'

jest.mock('../CommonComponents/OptionsCard', () => () => <div>MockOptionsCard</div>)

describe('Daily Check-in tab', () => {
  it('renders the daily check-in items', () => {
    const wrapper = render(<DailyCheckIn/>)
    expect(wrapper).toMatchSnapshot()
  })
})
