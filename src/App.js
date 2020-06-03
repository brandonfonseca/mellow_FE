import React from 'react'
import Sidebar from './Sidebar'
import DailyCheckIn from './DailyCheckIn'
import { connect } from 'react-redux'
import { currentTabSelector } from './ducks/global/selectors'
import PropTypes from 'prop-types'
import { DAILY_CHECK_IN } from './Sidebar/constants'

export const UnconnectedApp = ({ currentTab }) => {
  return (
    <>
      <Sidebar/>
      {currentTab === DAILY_CHECK_IN ? <DailyCheckIn/> : null}
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
