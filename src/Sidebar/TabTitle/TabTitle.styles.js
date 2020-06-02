import styled from 'styled-components'

export const StyledTabTitle = styled.div`
    margin: 33px 0 0 20px;
    width: 176px;
    height: 32px;
    font-size: 14px;
    font-weight: ${({ isSelected }) => isSelected ? '600' : 'normal'};
    color: #2d4554;
`

export const Title = styled.div`
    float: left;
    margin: 7px
`
export const SelectedBar = styled.div`
    width: 3px;
    height: 32px;
    border-radius: 1px;
    background-color: #5b4ed0;
    float:right;
`

export const Logo = styled.div`
    float: left;
    margin: 7px 12px 0 0;
    object-fit: contain;
`
