import styled from 'styled-components'

export const Card = styled.div`
    width: 707px;
    height: 235px;
    border-radius: 10px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
    background-color: #ffffff;
    float: left;
    margin: 65px 0 0 61px;
    position: relative;
`
export const Title = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: #2d4554;
    position: absolute;
    top: 15px;
    left: 20px;
`

export const Prompt = styled.div`
    font-size: 20px;
    color: #1c4657;
    position: absolute;
    top: 67px;
    right: 207px;
    bottom: 143px;
    left: 208px;
`

export const Logo = styled.img`
    position: absolute;
    z-index: 5;
    top: 20px;
    right: 20px;
`
