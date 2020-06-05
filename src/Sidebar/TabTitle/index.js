import React from 'react'
import PropTypes from 'prop-types'
import { TabTitleWrapper, Logo, SelectedBar, Title } from './TabTitle.styles'
import { DAILY_CHECK_IN, DASHBOARD, MINDFULNESS_TOOLS } from '../constants'
import { ReactComponent as CalendarLogo } from '../../logos/SidebarLogos/calendarLogo.svg'
import { ReactComponent as GraphLogo } from '../../logos/SidebarLogos/graphLogo.svg'
import { ReactComponent as LeafLogo } from '../../logos/SidebarLogos/leafLogo.svg'

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
const TabTitle = ({ title, isSelected, onClick }) => {
  return (
    <TabTitleWrapper isSelected={isSelected} onClick={onClick}>
      <Logo>{SelectLogo({ title })}</Logo>
      <Title>{title}</Title>
      {isSelected ? <SelectedBar/> : null}
    </TabTitleWrapper>)
}

TabTitle.propTypes = {
  title: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}
TabTitle.defaultProps = {
  isSelected: false,
  title: '',
  onClick: () => {}
}
export default TabTitle
