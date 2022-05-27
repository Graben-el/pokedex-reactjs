import styled from "styled-components"

export const PokeballContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: rgb(232, 232, 232);
    width: 100px;
    height: 100px;
    border-radius: 50px;
    border: 4px solid rgb(0, 0, 0);
    box-shadow: -2px 3px 6px 4px ${props => props.theme.pokedex.pokeball.shadow};
    align-self: center;

    @media (max-width: 664px) {
        height: 50px;
        width: 50px;
        margin-top: 10px;
    }
`

export const UpperPart = styled.div`
    align-self: flex-start;
    height: 50%;
    width: 100%;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    background-color: ${props => props.theme.pokedex.pokeball.bgColor};
    box-shadow: -5px 5px 10px 5px inset ${props => props.theme.pokedex.pokeball.bgLight};
`

export const MiddlePart = styled.div`
     display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    height: 5px;
    width: 100%;
    margin-top: -3px;
    background-color: black;
`

export const Circle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 50px;
    border: 4px solid black;

    @media (max-width: 664px) {
        height: 18px;
        width: 18px;
    }
`