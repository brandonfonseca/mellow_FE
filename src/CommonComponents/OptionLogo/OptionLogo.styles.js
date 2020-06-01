import styled from 'styled-components'

export const OptionLogoWrapper = styled.div`
    width: 55px;
    height: 68px;
    display: flex;
    flex-direction: column;
    align-content: center;
    margin-left: ${({ extraSpacing }) => extraSpacing ? '25px' : '10px'};
    margin-right: ${({ extraSpacing }) => extraSpacing ? '25px' : '10px'};
    align-items: center;
    cursor: pointer;
`

export const OptionText = styled.div`
    font-family: SourceSansPro;
    font-size: 14px;
    color: #1c4657;
    height: 18px;
    white-space: nowrap;
    margin-top: 15px;
    text-align: center;
`
