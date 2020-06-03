import React from 'react'
import { render } from '@testing-library/react'
import {UnconnectedApp as App} from './App'

jest.mock('./CommonComponents/CheckInCard', () => () => <div>MockCheckInCard</div>)
jest.mock('./Sidebar', () => () => <div>MockSidebar</div>)

it('renders the base app', () => {
  const app = render(<App />)
  expect(app).toMatchSnapshot()
})
