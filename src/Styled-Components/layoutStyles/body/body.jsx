import styled from 'styled-components'

export const BodyContainer = styled.main`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: 0 auto;
    height: 99vh;
    max-width: 1920px;
    background-color: ${props => props.theme.body.bgColor};
`