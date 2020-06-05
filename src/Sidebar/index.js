import React from 'react'
import { StyledBar, TitleText } from './Sidebar.styles'
import TabTitle from './TabTitle'
import { DAILY_CHECK_IN, DASHBOARD, MINDFULNESS_TOOLS } from './constants'
import { connect } from 'react-redux'
import { setCurrentTab } from '../ducks/global/actions'
import { currentTabSelector } from '../ducks/global/selectors'
import PropTypes from 'prop-types'

export const UnconnectedSidebar = ({ setCurrentTab, currentTab }) => {
  return (
    <StyledBar currentTab={currentTab}>
      <TitleText>mellow</TitleText>
      <TabTitle title={DAILY_CHECK_IN} isSelected={DAILY_CHECK_IN === currentTab ||
        currentTab === '' } onClick={() => setCurrentTab(DAILY_CHECK_IN)}/>
      <TabTitle title={DASHBOARD} isSelected={DASHBOARD === currentTab}
        onClick={() => setCurrentTab(DASHBOARD)}/>
      <TabTitle title={MINDFULNESS_TOOLS} isSelected={MINDFULNESS_TOOLS === currentTab}
        onClick={() => setCurrentTab(MINDFULNESS_TOOLS)}/>
    </StyledBar>)
}

const mapStateToProps = state => {
  return { currentTab: currentTabSelector(state) }
}

UnconnectedSidebar.propTypes = {
  setCurrentTab: PropTypes.func.isRequired,
  currentTab: PropTypes.string.isRequired
}

UnconnectedSidebar.defaultProps = {
  setCurrentTab: () => {},
  currentTab: ''
}

export default connect(mapStateToProps, { setCurrentTab })(UnconnectedSidebar)
