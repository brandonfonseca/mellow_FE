import React from 'react'
import HammerLogo from '../../logos/CommonLogos/hammer.svg'
import { Logo, UnderConstructionWrapper, Prompt } from './UnderConstruction.styles'

const UnderCostruction = () => {
  return (
    <UnderConstructionWrapper>
      <Logo src={HammerLogo}/>
      <Prompt>Under Construction. Please come back soon!</Prompt>
    </UnderConstructionWrapper>)
}

export default UnderCostruction
