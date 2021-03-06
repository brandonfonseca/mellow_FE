import styled from 'styled-components'
import { DAILY_CHECK_IN } from './constants'

export const StyledBar = styled.div`
    width: 196px;
    height: ${({ currentTab }) => currentTab === DAILY_CHECK_IN ? '1611px' : '1000px'};
    background-color: #ffffff;
    float: left;
`

export const TitleText = styled.div`
    font-family: Avenir;
    font-size: 18px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #5b4ed0;
    padding: 18px 0 0 24px;
`
