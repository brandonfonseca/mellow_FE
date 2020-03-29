import React from 'react'
import { StyledDiv } from './Message.styles'
import PropTypes from 'prop-types'

const Message = ({ msg }) => {
  return <StyledDiv>{msg}</StyledDiv>
}

Message.propTypes = {
  msg: PropTypes.string
}
export default Message
