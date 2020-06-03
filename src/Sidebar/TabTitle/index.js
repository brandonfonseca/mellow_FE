import React from 'react'
import PropTypes from 'prop-types'
import { TabTitleWrapper, Logo, SelectedBar, Title } from './TabTitle.styles'
import { DAILY_CHECK_IN, DASHBOARD, MINDFULNESS_TOOLS } from '../constants'
import { ReactComponent as CalendarLogo } from '../../Logos/SidebarLogos/calendarLogo.svg'
import { ReactComponent as GraphLogo } from '../../Logos/SidebarLogos/graphLogo.svg'
import { ReactComponent as LeafLogo } from '../../Logos/SidebarLogos/leafLogo.svg'

const SelectLogo = ({ title }) => {
  if (title === DAILY_CHECK_IN) {
    return <CalendarLogo/>
  } else if (title === DASHBOARD) {
    return <GraphLogo/>
  } else if (title === MINDFULNESS_TOOLS) {
    return <LeafLogo/>
  } else {
    return null
  }
}
const TabTitle = ({ title, isSelected }) => {
  return (
    <TabTitleWrapper isSelected={isSelected}>
      <Logo>{SelectLogo({ title })}</Logo>
      <Title>{title}</Title>
      {isSelected ? <SelectedBar/> : null}
    </TabTitleWrapper>)
}

TabTitle.propTypes = {
  title: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired
}
TabTitle.defaultProps = {
  isSelected: false,
  title: ''
}
export default TabTitle