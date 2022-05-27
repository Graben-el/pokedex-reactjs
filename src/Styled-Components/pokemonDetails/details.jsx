import styled from "styled-components"
import { Types } from "../types"
import hp from "../../assets/icons/hp.png"; 
import attack from "../../assets/icons/attack.png"
import def from "../../assets/icons/def.png"; 
import spa from "../../assets/icons/spattack.png"
import spd from "../../assets/icons/spdef.png"; 
import speed from "../../assets/icons/speed.png"

export const Container = styled.section`
display: flex;
justify-content: space-around;
align-items: center;
max-height: 100%;
width: 100%;

@media (max-width: 888px) {
    flex-direction: column;
    justify-content: start;
}
`

export const PokemonCard = styled.div`
    text-transform: capitalize;

    @media (max-width: 888px) {
        margin-bottom: 10px;
    }

    h1 {
        font-size: 2rem;
        margin-bottom: 10px;
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

        @media (max-width: 888px) {
            margin-bottom: 0;
            font-size: 22px;
        }
    }
`

export const Image = styled.img`
width: 95%;
margin-bottom: -20px;
filter: drop-shadow(-10px 10px 3px #00000076);

@media (max-width: 1366px) {
    width: 75%;
}

@media (max-width: 888px) {
    width: 60%;
}

@media (max-width: 664px) {
    width: 80%;
}
`

export const Type = styled(Types)`
    margin: 0 6px;
    font-size: 18px;
    width: 20%;

    @media (max-width: 888px) {
        margin-top: 10px;
        font-size: 15px;
        width: 12%;
    }

    @media (max-width: 664px) {
        width: 20%;
    }
`

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45%;
    height: 95%;
    border: 10px double ${props => props.theme.pokemonDetails.border};
    background-color: ${props => props.theme.pokemonDetails.bgColor};
    border-radius: 10px;
    box-shadow: -5px 5px 5px #0000007a;
    padding: 10px 0;

    h2 {
        font-family: 'Pokemon Hollow', Arial, Serif;
        color: ${props => props.theme.pokemonDetails.color};
        font-size: 1.2em;

        @media (max-width: 664px) {
            font-size: 16px;
        }
    }

    @media (max-width: 1356px) {
        width: 68%;
    }

    @media (max-width: 888px) {
        width: 95%;
        height: 47%;
        padding: 7px;
        display: grid;
        row-gap: 5px;
        grid: 
            "stats ability ability" 50%
            "moves ability ability" 50%
            / 45%
    }

    @media (max-width: 760px) {
        row-gap: 1px;
        grid: 
            "stats moves moves" 50%
            "ability ability ability" 50%
            / 45%;
        height: 50%;
        font-size: 14px;
    }

    @media (max-width: 664px) {
        display: flex;
        flex-direction: column;
        height: 500px;
    }
`

export const Stats = styled.div`
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    padding: 2px;
    border-radius: 10px;
    box-shadow: ${props => props.theme.pokemonDetails.card.boxShadow};
    background-color: ${props => props.theme.pokemonDetails.card.bgColor};
    border: 3px solid ${props => props.theme.pokemonDetails.card.border};

    @media (max-width: 888px) {
        grid-area: stats;
        width: 95%;
        height: 95%;
    }

    @media (max-width: 834px) {
        overflow-y: scroll;
        justify-content: start;
    }

    @media (max-width: 664px) {
        overflow: visible;
        height: 50%;
        font-size: 13px;
        padding: 0 0 5px;
    }

    ul {
        width: 100%;
        padding: 10px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        @media (max-width: 888px) {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding: 0;
        }

        li {
            margin: 3px;
        }
    }

    .hp::before {
        background: url(${hp}) center center no-repeat;
    }
    .attack::before {
        background: url(${attack}) center center no-repeat;
    }
    .defense::before {
        background: url(${def}) center center no-repeat;
    }
    .special-attack::before {
        background: url(${spa}) center center no-repeat;
    }
    .special-defense::before {
        background: url(${spd}) center center no-repeat;
    }
    .speed::before{
        background: url(${speed}) center center no-repeat;
    }

    .hp::before, .attack::before, .defense::before, 
    .special-attack::before, .special-defense::before, .speed::before {
        content: "";
        background-size: contain;
        width: 15px;
        height: 15px;
        display: inline-block;
        margin-right: 4px;
    }
`

export const MovesContainer = styled.div`
    width: 90%;
    height: 35%;
    border-radius: 10px;
    padding: 6px 6px 3px;
    overflow-y: hidden;
    margin: 10px 0;
    box-shadow: ${props => props.theme.pokemonDetails.card.boxShadow};
    background-color: ${props => props.theme.pokemonDetails.card.bgColor};
    border: 3px solid ${props => props.theme.pokemonDetails.card.border};

    @media (max-width: 1366px) {
        h2 {
            margin-top: -20px;
        }
    }

    @media (max-width: 888px) {
        grid-area: moves;
        width: 95%;
        height: 95%;
        margin: 0;
    }

    @media (max-width: 664px) {
        margin: 10px 0;
        padding: 0;

        h2 {
            margin-top: 0;
        }
    }
`

export const Moves = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3px;
    text-transform: capitalize;
    overflow-y: scroll;
    height: 63%;

    @media (max-width: 1356px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

export const Move = styled.li`
    margin: 5px auto;

    @media (max-width: 888px) {
        margin: 0;
    }

    @media (max-width: 664px) {
        font-size: 13px;
    }
`

export const AbilitiesContainer = styled.div`
    height: 37%;
    width: 90%;
    border-radius: 10px;
    overflow: hidden;
    padding: 10px;
    box-shadow: ${props => props.theme.pokemonDetails.card.boxShadow};
    background-color: ${props => props.theme.pokemonDetails.card.bgColor};
    border: 3px solid ${props => props.theme.pokemonDetails.card.border};

    h2{
        margin: -10px 0 0;
    }

    @media (max-width: 888px) {
        grid-area: ability;
        width: 100%;
        height: 95%;
    }

    @media (max-width: 664px) {
        font-size: 13px;
    }
`

export const Abilities = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: nowrap;
    height: 85%;

    @media (max-width: 888px) {
        justify-content: space-between;
        height: 85%;
    }
`

export const Ability = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;

    p {
        margin: 10% 0;
    }

    @media (max-width: 1366px) {
        font-size: 12px;
    }

    @media (max-width: 664px) {
        font-size: 11.5px;
    }
`

export const Descriptions = styled.div`
    width: 60%;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 1366px) {
        font-size: 12px;
    }

    @media (max-width: 664px) {
        width: 70%;
        font-size: 11.5px;
    }
`