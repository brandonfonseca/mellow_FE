import React from 'react'
import PropTypes from 'prop-types'
import { OptionLogoWrapper, OptionText, SelectedWrapper } from './OptionLogo.styles'

const OptionLogo = ({ option, logo, extraSpacing, onClick, selected }) => {
  return (
    <OptionLogoWrapper onClick={onClick} extraSpacing={extraSpacing}>
      {selected
        ? <SelectedWrapper>
          <img alt={''} src={logo}/>
        </SelectedWrapper>
        : <img alt={''} src={logo}/>}
      <OptionText selected={selected}>{option}</OptionText>
    </OptionLogoWrapper>
  )
}

OptionLogo.propTypes = {
  extraSpacing: PropTypes.bool,
  onClick: PropTypes.func,
  option: PropTypes.string,
  logo: PropTypes.string,
  selected: PropTypes.bool
}

OptionLogo.defaultProps = {
  extraSpacing: false,
  selected: false
}
export default OptionLogo
