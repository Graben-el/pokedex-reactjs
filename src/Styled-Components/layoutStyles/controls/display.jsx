import styled from 'styled-components'

export const DisplayContainer = styled.div`
    background-color: rgb(243, 243, 243);
    align-self: start;
    width: 1200px;
    margin: 0 15px;
    height: 106%;
    border-radius: 10px;
    border: 3px solid ${props => props.theme.pokedex.display.border};
    box-shadow: -2px 3px 6px 4px ${props => props.theme.pokedex.display.shadow};

    @media (max-width: 1444px) {
        height: 99%;
    }
    
    @media (max-width: 888px) {
        height: 100%;
    }

    @media (max-width: 664px) {
        height: 100%;
    }
`

export const Screen = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 10px outset ${props => props.theme.pokedex.display.screen.border};
    border-radius: 10px;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
`