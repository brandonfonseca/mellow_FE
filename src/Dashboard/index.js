import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { currentDashboardDataSelector } from '../ducks/dashboard/selectors'

import { DashboardWrapper } from './Dashboard.styles'
import BarChart from '../CommonComponents/BarChart'

const UnconnectedDashboard = ({ currentDashboardData }) => {
  console.log(currentDashboardData)
  return (
    <DashboardWrapper>
      <BarChart/>
      <BarChart/>
      <BarChart/>
      <BarChart/>
    </DashboardWrapper>)
}

const mapStateToProps = state => {
  return { currentDashboardData: currentDashboardDataSelector(state) }
}

UnconnectedDashboard.propTypes = {
  currentDashboardData: PropTypes.object
}
export default connect(mapStateToProps, {})(UnconnectedDashboard)
