import styled from 'styled-components'

export const OptionLogoWrapper = styled.div`
    width: 55px;
    height: 68px;
    display: flex;
    flex-direction: column;
    align-content: center;
    margin: ${({ extraSpacing }) => extraSpacing ? '0 25px 0 25px' : '0 10px 0 10px'};
    align-items: center;
    cursor: pointer;
`

export const SelectedWrapper = styled.div`
    position: absolute;
    border: solid 2px #5b4ed0;
    padding: 3px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`

export const OptionText = styled.div`
    font-size: 14px;
    color: #1c4657;
    height: 18px;
    white-space: nowrap;
    margin-top: 15px;
    text-align: center;
    position: absolute;
    top: 35px;
    color: ${({ selected }) => selected ? '#5b4ed0' : ''};
    font-weight: ${({ selected }) => selected ? '600' : ''};
`
