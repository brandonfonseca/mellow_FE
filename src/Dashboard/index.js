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
      <BarChart title={'Mood over time'} data={currentDashboardData.mood}/>
      <BarChart title={'Water intake over time'} data={currentDashboardData.water}/>
      <BarChart title={'Nutrition rating over time'} data={currentDashboardData.nutrition}/>
      <BarChart title={'Activity level over time'} data={currentDashboardData.activity}/>
      <BarChart title={'Sleep duration over time'} data={currentDashboardData.sleep}/>
      <BarChart title={'Meditated over time'} data={currentDashboardData.sleep}/>

    </DashboardWrapper>)
}

const mapStateToProps = state => {
  return { currentDashboardData: currentDashboardDataSelector(state) }
}

UnconnectedDashboard.propTypes = {
  currentDashboardData: PropTypes.object
}
export default connect(mapStateToProps, {})(UnconnectedDashboard)
