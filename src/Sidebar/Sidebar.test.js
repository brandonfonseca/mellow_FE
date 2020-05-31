import React from 'react'
import Sidebar from '.'
import { render } from '@testing-library/react'

describe('Sidebar', () => {
  it('renders the side bar', () => {
    const wrapper = render(<Sidebar/>)
    expect(wrapper).toMatchSnapshot()
  })
})
