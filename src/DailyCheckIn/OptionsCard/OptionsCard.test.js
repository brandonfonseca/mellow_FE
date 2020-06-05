import React from 'react'
import Immutable from 'immutable'
import { UnconnectedOptionsCard as OptionsCard } from '.'
import { render } from '@testing-library/react'
import { mount, shallow } from 'enzyme'
import appleLogo from '../../Logos/CardHeaderLogos/apple.svg'
import { Title, Prompt, Logo } from './OptionsCard.styles'
import OptionLogo from './OptionLogo'

describe('OptionsCard', () => {
  it('renders the check in card correctly', () => {
    const wrapper = render(<OptionsCard title={'title'} prompt={'prompt'}/>)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders the title that is passed in props', () => {
    const mockTitle = 'mock title'
    const wrapper = shallow(<OptionsCard title={mockTitle}/>)
    expect(wrapper.find(Title).exists()).toBe(true)
    expect(wrapper.find(Title).text()).toBe(mockTitle.toUpperCase())
  })

  it('renders the prompt that is passed in props', () => {
    const mockPrompt = 'mock prompt'
    const wrapper = shallow(<OptionsCard prompt={mockPrompt}/>)
    expect(wrapper.find(Prompt).exists()).toBe(true)
    expect(wrapper.find(Prompt).text()).toBe(mockPrompt)
  })

  it('renders the logo that is passed in props', () => {
    const wrapper = shallow(<OptionsCard logo={appleLogo}/>)
    expect(wrapper.find(Logo).prop('src')).toEqual(appleLogo)
  })

  it('renders the correct number of options given an options map', () => {
    const mockOptions = Immutable.fromJS({ label1: [appleLogo, 'appleLogo'], label2: [appleLogo, 'appleLogo2'] })
    const wrapper = mount(<OptionsCard options={mockOptions}/>)
    expect(wrapper.find(OptionLogo).exists()).toBe(true)
    expect(wrapper.find(OptionLogo).length).toEqual(2)
  })
})
