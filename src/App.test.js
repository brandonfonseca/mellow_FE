import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

it('renders the base app', () => {
  const app = render(<App />)
  expect(app).toMatchSnapshot()
})
