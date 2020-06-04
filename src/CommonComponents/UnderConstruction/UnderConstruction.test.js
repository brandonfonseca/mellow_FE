import React from 'react'
import { render } from '@testing-library/react'
import UnderConstruction from '.'

it('renders the base app', () => {
  const app = render(<UnderConstruction />)
  expect(app).toMatchSnapshot()
})
