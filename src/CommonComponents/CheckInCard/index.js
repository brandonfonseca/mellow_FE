import React from 'react'
import PropTypes from 'prop-types'
import { Card, Title, Prompt, Logo, OptionsWrapper } from './CheckInCard.styles'
import OptionLogo from '../OptionLogo'
import Immutable from 'immutable'

const CheckInCard = ({ title, prompt, logo, options, extraSpacing }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Prompt>{prompt}</Prompt>
      <Logo src={logo}/>
      <OptionsWrapper>
        {options.entrySeq().map(([option, logo]) => <OptionLogo key={option} logo={logo} option={option} extraSpacing={extraSpacing}/>)}
      </OptionsWrapper>
    </Card>
  )
}

CheckInCard.propTypes = {
  title: PropTypes.string,
  prompt: PropTypes.string,
  logo: PropTypes.string,
  options: PropTypes.instanceOf(Immutable.Map),
  extraSpacing: PropTypes.bool
}

CheckInCard.defaultProps = {
  extraSpacing: false
}
export default CheckInCard
