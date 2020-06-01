import React from 'react'
import PropTypes from 'prop-types'
import { OptionLogoWrapper, OptionText } from './OptionLogo.styles'

const OptionLogo = ({ option, logo, extraSpacing }) => {
  return (
    <OptionLogoWrapper extraSpacing={extraSpacing}>
      <img alt={''} src={logo}/>
      <OptionText>{option}</OptionText>
    </OptionLogoWrapper>
  )
}

OptionLogo.propTypes = {
  extraSpacing: PropTypes.bool,
  option: PropTypes.string,
  logo: PropTypes.string
}

OptionLogo.defaultProps = {
  extraSpacing: false
}
export default OptionLogo
