import React from 'react'
import BarChart from '.'
import { render } from '@testing-library/react'
import { shallow } from 'enzyme'
import { ChartTitle } from './Chart.styles'

describe('BarChart', () => {
  it('renders the BarChart correctly', () => {
    const wrapper = render(<BarChart title={'mockTitle'}/>)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders the title passed in props', () => {
    const mockTitle = 'mockTitle'
    const wrapper = shallow(<BarChart title={mockTitle}/>)
    expect(wrapper.find(ChartTitle).exists()).toBe(true)
    expect(wrapper.find(ChartTitle).text()).toEqual(mockTitle)
  })
})
