import React from 'react'
import { StyledBar, TitleText } from './Sidebar.styles'
import TabTitle from './TabTitle'
import { DAILY_CHECK_IN, DASHBOARD, MINDFULNESS_TOOLS } from './constants'

const Sidebar = () => {
  return (
    <StyledBar>
      <TitleText>mellow</TitleText>
      <TabTitle title={DAILY_CHECK_IN} isSelected={true}></TabTitle>
      <TabTitle title={DASHBOARD}></TabTitle>
      <TabTitle title={MINDFULNESS_TOOLS}></TabTitle>
    </StyledBar>)
}

export default Sidebar
