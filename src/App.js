import React from 'react'
import Sidebar from './Sidebar'
import DailyCheckIn from './DailyCheckIn'
import Dashboard from './Dashboard'
import { connect } from 'react-redux'
import { currentTabSelector } from './ducks/global/selectors'
import PropTypes from 'prop-types'
import { DAILY_CHECK_IN, DASHBOARD, MINDFULNESS_TOOLS } from './Sidebar/constants'
import UnderConstruction from './CommonComponents/UnderConstruction'

export const UnconnectedApp = ({ currentTab }) => {
  return (
    <>
      <Sidebar/>
      {currentTab === DAILY_CHECK_IN ? <DailyCheckIn/> : null}
      {currentTab === DASHBOARD ? <Dashboard/> : null}
      {currentTab === MINDFULNESS_TOOLS ? <UnderConstruction/> : null}

    </>
  )
}

const mapStateToProps = state => {
  return {
    currentTab: currentTabSelector(state)
  }
}

UnconnectedApp.propTypes = {
  currentTab: PropTypes.string
}

export default connect(mapStateToProps, {})(UnconnectedApp)
