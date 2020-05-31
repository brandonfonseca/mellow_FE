import React from 'react'
import PropTypes from 'prop-types'
import { Card, Title, Prompt, Logo } from './CheckInCard.styles'

const CheckInCard = ({ title, prompt, logo }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Prompt>{prompt}</Prompt>
      <Logo src={logo}/>
    </Card>
  )
}

CheckInCard.propTypes = {
  title: PropTypes.string,
  prompt: PropTypes.string,
  logo: PropTypes.string
}
export default CheckInCard
