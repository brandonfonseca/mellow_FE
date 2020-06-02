import React from 'react'
import PropTypes from 'prop-types'
import { Card, Title, Prompt, Logo, OptionsWrapper } from './CheckInCard.styles'
import OptionLogo from '../OptionLogo'
import Immutable from 'immutable'
import { connect } from 'react-redux'
import { setOption } from '../../ducks/dailyCheckIn/actions'

export const UnconnectedCheckInCard = ({ title, prompt, logo, options, extraSpacing, choices, setOption }) => {
  return (
    <Card>
      <Title>{title.toUpperCase()}</Title>
      <Prompt>{prompt}</Prompt>
      <Logo src={logo}/>
      <OptionsWrapper>
        {options.entrySeq().map(([option, logo]) =>
          <OptionLogo key={logo.get(1)} logo={logo.get(0)} option={option} extraSpacing={extraSpacing}
            onClick={() => setOption({ type: title, choice: logo.get(1) })}/>
        )}
      </OptionsWrapper>
    </Card>
  )
}

UnconnectedCheckInCard.propTypes = {
  title: PropTypes.string,
  prompt: PropTypes.string,
  logo: PropTypes.string,
  options: PropTypes.instanceOf(Immutable.Map),
  extraSpacing: PropTypes.bool
}

UnconnectedCheckInCard.defaultProps = {
  title: '',
  prompt: '',
  extraSpacing: false,
  options: new Immutable.Map()
}

const mapStateToProps = state => {
  return {
    choices: state
  }
}

export default connect(mapStateToProps, { setOption })(UnconnectedCheckInCard)
