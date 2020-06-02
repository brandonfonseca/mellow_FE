import React from 'react'
import Immutable from 'immutable'
import { UnconnectedCheckInCard as CheckInCard } from '.'
import { render } from '@testing-library/react'
import { mount, shallow } from 'enzyme'
import appleLogo from '../../Logos/CardHeaderLogos/apple.svg'
import { Title, Prompt, Logo } from './CheckInCard.styles'
import OptionLogo from '../OptionLogo'

describe('CheckInCard', () => {
  it('renders the check in card correctly', () => {
    const wrapper = render(<CheckInCard title={'title'} prompt={'prompt'}/>)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders the title that is passed in props', () => {
    const mockTitle = 'mock title'
    const wrapper = shallow(<CheckInCard title={mockTitle}/>)
    expect(wrapper.find(Title).exists()).toBe(true)
    expect(wrapper.find(Title).text()).toBe(mockTitle.toUpperCase())
  })

  it('renders the prompt that is passed in props', () => {
    const mockPrompt = 'mock prompt'
    const wrapper = shallow(<CheckInCard prompt={mockPrompt}/>)
    expect(wrapper.find(Prompt).exists()).toBe(true)
    expect(wrapper.find(Prompt).text()).toBe(mockPrompt)
  })

  it('renders the logo that is passed in props', () => {
    const wrapper = shallow(<CheckInCard logo={appleLogo}/>)
    expect(wrapper.find(Logo).prop('src')).toEqual(appleLogo)
  })

  it('renders the correct number of options given an options map', () => {
    const mockOptions = Immutable.fromJS({ label1: [appleLogo, 'appleLogo'], label2: [appleLogo, 'appleLogo2'] })
    const wrapper = mount(<CheckInCard options={mockOptions}/>)
    expect(wrapper.find(OptionLogo).exists()).toBe(true)
    expect(wrapper.find(OptionLogo).length).toEqual(2)
  })
})
