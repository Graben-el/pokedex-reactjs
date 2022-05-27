import styled from "styled-components";

export const PokedexSectionContainer = styled.section`
    border-radius: 50px;
    width: 95%;
    height: 95%;
    box-shadow: rgb(0 0 0 / 42%) -6px 6px 6px 3px;

    @media (max-width: 664px) {
        width: 100%;
        height: 100%;
    }
`

export const PokedexContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${props => props.theme.pokedex.bgColor};
    padding: 10px 0;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    border: 5px solid ${props => props.theme.pokedex.border};
    box-shadow: inset rgb(0 0 0 / 42%) 6px -5px 6px 3px;
    
    @media (max-width: 664px) {
        border-radius: 0;
    }
`