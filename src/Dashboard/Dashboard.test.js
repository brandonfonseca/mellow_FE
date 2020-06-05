import React from 'react'
import { render } from '@testing-library/react'
import { UnconnectedDashboard as Dashboard } from '.'

describe('Dashboard Tab', () => {
  it('renders the dashboard correctly', () => {
    const mockCurrentDashboardData = {
      mood: {},
      activity: {},
      meditate: {},
      nutrition: {},
      sleep: {},
      water: {}
    }
    const wrapper = render(<Dashboard currentDashboardData={mockCurrentDashboardData}/>)
    expect(wrapper).toMatchSnapshot()
  })
})
