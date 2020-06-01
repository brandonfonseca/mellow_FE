import React from 'react'
import PropTypes from 'prop-types'
import { OptionLogoWrapper, OptionText } from './OptionLogo.styles'

const OptionLogo = ({ option, logo, extraSpacing, onClick }) => {
  return (
    <OptionLogoWrapper onClick={onClick} extraSpacing={extraSpacing}>
      <img alt={''} src={logo}/>
      <OptionText>{option}</OptionText>
    </OptionLogoWrapper>
  )
}

OptionLogo.propTypes = {
  extraSpacing: PropTypes.bool,
  onClick: PropTypes.func,
  option: PropTypes.string,
  logo: PropTypes.string
}

OptionLogo.defaultProps = {
  extraSpacing: false
}
export default OptionLogo
