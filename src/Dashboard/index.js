import React from 'react'
import PropTypes from 'prop-types'

import { DashboardWrapper } from './Dashboard.styles'
import BarChart from '../CommonComponents/BarChart'

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <BarChart/>
      <BarChart/>
      <BarChart/>
      <BarChart/>
    </DashboardWrapper>)
}

export default Dashboard
