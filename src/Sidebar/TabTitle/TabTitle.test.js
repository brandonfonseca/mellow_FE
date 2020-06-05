import React from 'react'
import TabTitle from '.'
import { render } from '@testing-library/react'
import { mount } from 'enzyme'
import { Title, SelectedBar, TabTitleWrapper } from './TabTitle.styles'
import { ReactComponent as CalendarLogo } from '../../Logos/SidebarLogos/calendarLogo.svg'
import { ReactComponent as GraphLogo } from '../../Logos/SidebarLogos/graphLogo.svg'
import { ReactComponent as LeafLogo } from '../../Logos/SidebarLogos/leafLogo.svg'
import { DAILY_CHECK_IN, DASHBOARD, MINDFULNESS_TOOLS } from '../constants'

describe('TabTitle', () => {
  it('renders the tab title component correctly', () => {
    const wrapper = render(<TabTitle/>)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders the correct title and logo for daily check in', () => {
    const wrapper = mount(<TabTitle title={DAILY_CHECK_IN}/>)
    expect(wrapper.find(Title).exists()).toBe(true)
    expect(wrapper.find(Title).text()).toBe(DAILY_CHECK_IN)
    expect(wrapper.find(CalendarLogo).exists()).toBe(true)
  })

  it('renders the correct title and logo for dashboard', () => {
    const wrapper = mount(<TabTitle title={DASHBOARD}/>)
    expect(wrapper.find(Title).exists()).toBe(true)
    expect(wrapper.find(Title).text()).toBe(DASHBOARD)
    expect(wrapper.find(GraphLogo).exists()).toBe(true)
  })

  it('renders the correct title and logo for mindfulness tools', () => {
    const wrapper = mount(<TabTitle title={MINDFULNESS_TOOLS}/>)
    expect(wrapper.find(Title).exists()).toBe(true)
    expect(wrapper.find(Title).text()).toBe(MINDFULNESS_TOOLS)
    expect(wrapper.find(LeafLogo).exists()).toBe(true)
  })

  it('renders the SelectedBar if isSelected is true', () => {
    const wrapper = mount(<TabTitle title={MINDFULNESS_TOOLS} isSelected={true}/>)
    expect(wrapper.find(SelectedBar).exists()).toBe(true)
  })

  it('does not render the SelectedBar if isSelected is false', () => {
    const wrapper = mount(<TabTitle title={MINDFULNESS_TOOLS} isSelected={false}/>)
    expect(wrapper.find(SelectedBar).exists()).toBe(false)
  })

  it('calls the onClick function that is passed in props on click', () => {
    const spy = jest.fn()
    const wrapper = mount(<TabTitle title={MINDFULNESS_TOOLS} onClick={spy}/>)
    expect(wrapper.find(TabTitleWrapper).exists()).toBe(true)
    wrapper.find(TabTitleWrapper).simulate('click')
    expect(spy).toHaveBeenCalledTimes(1)
  })
})
