import React from 'react'
import OptionLogo from '.'
import { render } from '@testing-library/react'
import { shallow } from 'enzyme'
import { thumbUp } from '../../Logos'
import { OptionLogoWrapper, OptionText } from './OptionLogo.styles'

describe('OptionLogo', () => {
  it('renders the option logo correctly', () => {
    const wrapper = render(<OptionLogo logo={thumbUp} option={'Yes'} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders the option text from props ', () => {
    const mockOption = 'Yes'
    const wrapper = shallow(<OptionLogo option={mockOption}/>)
    expect(wrapper.find(OptionText).exists()).toBe(true)
    expect(wrapper.find(OptionText).text()).toBe(mockOption)
  })

  it('renders the logo from props', () => {
    const wrapper = shallow(<OptionLogo logo={thumbUp}/>)
    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.find('img').prop('src')).toEqual(thumbUp)
  })

  it('calls the onClick function passed in props when an option is clicked', () => {
    const spy = jest.fn()
    const wrapper = shallow(<OptionLogo logo={thumbUp} option={'Yes'} onClick={spy} />)
    wrapper.find(OptionLogoWrapper).simulate('click')
    expect(spy).toHaveBeenCalledTimes(1)
  })
})
