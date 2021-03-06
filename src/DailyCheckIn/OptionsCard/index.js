import React from 'react'
import PropTypes from 'prop-types'
import { Card, Title, Prompt, Logo, OptionsWrapper } from './OptionsCard.styles'
import OptionLogo from './OptionLogo'
import Immutable from 'immutable'
import { connect } from 'react-redux'
import { setChoice } from '../../ducks/dailyCheckIn/actions'
import { currentSelectionSelector } from '../../ducks/dailyCheckIn/selectors'

export const UnconnectedOptionsCard = ({ title, prompt, logo, options, extraSpacing, setChoice, currentSelections }) => {
  return (
    <Card>
      <Title>{title.toUpperCase()}</Title>
      <Prompt>{prompt}</Prompt>
      <Logo src={logo}/>
      <OptionsWrapper>
        {options.entrySeq().map(([option, logo]) =>
          <OptionLogo key={logo.get(1)} logo={logo.get(0)} option={option} extraSpacing={extraSpacing}
            onClick={() => setChoice({ type: title, choice: logo.get(1) })}
            selected={isSelected(currentSelections, logo.get(1))}/>
        )}
      </OptionsWrapper>
    </Card>
  )
}

const isSelected = (currentSelections, potentialSelection) => {
  return currentSelections.includes(potentialSelection)
}

UnconnectedOptionsCard.propTypes = {
  title: PropTypes.string,
  prompt: PropTypes.string,
  logo: PropTypes.string,
  options: PropTypes.instanceOf(Immutable.Map),
  extraSpacing: PropTypes.bool,
  setChoice: PropTypes.func,
  currentSelections: PropTypes.instanceOf(Immutable.Map)
}

UnconnectedOptionsCard.defaultProps = {
  title: '',
  prompt: '',
  extraSpacing: false,
  options: new Immutable.Map(),
  currentSelections: new Immutable.Map()
}

const mapStateToProps = (state) => {
  return { currentSelections: currentSelectionSelector(state) }
}
export default connect(mapStateToProps, { setChoice })(UnconnectedOptionsCard)
