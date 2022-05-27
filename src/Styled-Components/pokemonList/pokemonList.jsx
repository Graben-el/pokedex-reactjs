import styled from "styled-components"
import { Types } from "../types"

export const ListContainer = styled.div`
    width: 100%;
    max-height: 100%;
    padding: 10px 0;
    a {
        text-decoration: none;
    }
`

export const List = styled.ul`
display: flex;
justify-content: center;
flex-wrap: wrap;
list-style: none;
padding: 0;
margin-bottom: 20px;
`

export const PokemonCard = styled.li`
    text-transform: capitalize; 
    margin: 8px;
    padding: 18px;
    border: 2px outset #cac9c925;
    transition: 0.2s ease-in-out;
    box-shadow: -3px 4px 5px #00000022;
    &:hover {
        transform: scale(1.02);
    }
    h1 {
        font-family: 'Pokemon', Arial, Serif;
        font-weight: lighter;
        color: ${props => props.theme.pokemonList.pokemonCard.color};
        text-shadow: 
            2px 0 1px ${props => props.theme.pokemonList.pokemonCard.nameShadow}, 
           -2px 0 1px ${props => props.theme.pokemonList.pokemonCard.nameShadow}, 
            0 2px 1px ${props => props.theme.pokemonList.pokemonCard.nameShadow}, 
            0 -2px  1px  ${props => props.theme.pokemonList.pokemonCard.nameShadow}, 
            1px 1px 1px ${props => props.theme.pokemonList.pokemonCard.nameShadow}, 
           -1px -1px  1px  ${props => props.theme.pokemonList.pokemonCard.nameShadow}, 
            1px -1px  1px  ${props => props.theme.pokemonList.pokemonCard.nameShadow}, 
           -1px 1px  1px  ${props => props.theme.pokemonList.pokemonCard.nameShadow};
    }
    img {
        width: 200px;
        filter: drop-shadow(-8px 6px 3px #00000076);
    }
    
    @media (max-width: 664px) {
        margin: 2px;
        padding: 20px;
       img {
           width: 115px;
       }
       h1 {
           font-size: 12px;
       }
    }

    @media (max-width: 400px) {
        margin: 0px;
        img {
          width: 100px;
        }
    }
`

export const Type = styled(Types)`
    margin: 3px;
    width: 40%;
    font-size: 15px;

    @media (max-width: 664px) {
    width: 70%;
    font-size: 10px;
    }
`