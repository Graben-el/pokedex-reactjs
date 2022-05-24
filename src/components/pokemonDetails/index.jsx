import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getPokemon } from "../../services/getPokemon";
import hp from "../../assets/icons/hp.png"
import attack from "../../assets/icons/attack.png"
import def from "../../assets/icons/def.png"
import spa from "../../assets/icons/spattack.png"
import spd from "../../assets/icons/spdef.png"
import speed from "../../assets/icons/speed.png"
import { isEmpty } from "../../services/getPokemon";
import Loading from "../loading/loading";

export const PokemonDetails = (props) => {
    const [pokemon, setPokemon] = useState({})
    const [description, setDescription] = useState([])

    const { name } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPokemon(name)
            setPokemon(data)
            const abilityDescriptionPromisses = data.abilities.map(async element => {
                const description = await fetch(element.ability.url)
                const descriptionJson = await description.json()
                return descriptionJson
            })
            const abilityDescription = await Promise.all(abilityDescriptionPromisses)
                .then(value => value)
            setDescription(abilityDescription)

        }
        fetchData()
    }, [])

    return (
        <>
            {!isEmpty(pokemon) ?
                <Container>
                    <PokemonCard>
                        {/* {console.log(pokemon)} */}

                        <Image src={pokemon.sprites?.other['official-artwork'].front_default} />
                        <h1>{pokemon.name}</h1>
                        <TypeContainer>
                            {pokemon.types.map((element, index) => {
                                return (<Type typeName={element.type.name} key={index}>{element.type.name}</Type>)
                            })}
                        </TypeContainer>
                    </PokemonCard>
                    <Details>
                        <Stats>
                            <h2>Statistics</h2>
                            <ul>
                                {pokemon.stats.map((element, index) => {
                                    return (
                                        <li key={index} className={element.stat.name}>{element.stat.name}: {element.base_stat}</li>
                                    )
                                })}
                            </ul>
                        </Stats>
                        <MovesContainer>
                            <h2>Moves</h2>
                            <Moves >
                                {
                                    pokemon.moves.map((element, index) => {

                                        return (<Move key={index}>
                                            {element.move.name}
                                        </Move>)
                                    })
                                }
                            </Moves>
                        </MovesContainer>

                        <AbilitiesContainer>
                            <h2>Abilities</h2>
                            <Abilities>
                                <Ability>
                                    {
                                        pokemon.abilities.map((element, index) => {
                                            if (index <= 1) {
                                                return (
                                                    <>
                                                        <p key={index}>{element.ability.name}</p>
                                                        <br/>
                                                    </>
                                                )
                                            }
                                        })
                                    }
                                </Ability>
                                <Descriptions>
                                    {
                                        description?.map((element, index) => {
                                            if (index <= 1) {
                                                if (element.effect_entries[index].language.name === 'en') {
                                                    return (
                                                        <>
                                                            <p key={index}>{element.effect_entries[index].short_effect}</p>
                                                            <br/>
                                                        </>
                                                    )
                                                } else {
                                                    return (
                                                        <>
                                                            <p key={index}>{element.effect_entries[index + 1].short_effect}</p>
                                                            <br/>
                                                        </>
                                                    )
                                                }
                                            }
                                        })
                                    }
                                </Descriptions>
                            </Abilities>
                        </AbilitiesContainer>

                    </Details>
                </Container>
                : <Loading />
            }
        </>
    )
}

const Container = styled.section`
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

const PokemonCard = styled.div`
    text-transform: capitalize;

    @media (max-width: 888px) {
        margin-bottom: 10px;
    }

    h1 {
        font-size: 2rem;
        margin-bottom: 10px;
        font-family: 'Pokemon', Arial, Serif;
        font-weight: 300;
        color: #ffc400;
        text-shadow: 2px 0 3px blue, -2px 0 3px blue, 0 2px 3px blue, 0 -2px  3px  blue, 1px 1px 3px blue, -1px -1px  3px  blue, 1px -1px  3px  blue, -1px 1px  3px  blue;

        @media (max-width: 888px) {
            margin-top: -10px;
            margin-bottom: 0;
            font-size: 22px;
        }
    }
`
const Image = styled.img`
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

const TypeContainer = styled.div`
    display: flex;
    justify-content: center;
`
const Type = styled.p`

    margin: 0 6px;
    width: 20%;
    border: 1px solid #0000001f;
    border-radius: 5px;
    font-size: 18px;
    color: white;
    background-color: ${props => {
        const types = {
            normal: "#A8A878", fire: "#F08030",
            water: "#6890F0", grass: "#78C850",
            electric: "#F8D030", ice: "#98D8D8",
            fighting: "#C03028", poison: "#A040A0",
            ground: "#E0C068", flying: "#A890F0",
            psychic: "#F85888", bug: "#A8B820",
            rock: "#B8A038", ghost: "#705898",
            dark: "#705848", dragon: "#7038F8",
            steel: "#B8B8D0", fairy: "#F0B6BC"
        }

        for (const [type, color] of Object.entries(types)) {
            if (type === props.typeName) {
                return props.typeName = color
            }
        }
    }};

    @media (max-width: 888px) {
        margin-top: -5px;
        font-size: 15px;
        width: 12%;
    }

    @media (max-width: 664px) {
        width: 20%;
    }
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid;
    width: 45%;
    height: 95%;
    border: 10px double #ffc400;
    background-color: #003ad8;
    border-radius: 10px;
    box-shadow: -5px 5px 5px #0000007a;
    padding: 10px 0;
    
    h2 {
        font-family: 'Pokemon Hollow', Arial, Serif;
        color: #ffc400;
        font-size: 1.2em;
        margin-top: -18px;

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
const Stats = styled.div`
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    padding: 6px;
    border: 2px outset #eeeeee7a;
    box-shadow: -3px 4px 5px #0000007a;
    background-color: white;
    border-radius: 10px;
    border: 3px solid #ffc400;

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
    }

    ul {
        width: 100%;
        padding: 10px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        @media (max-width: 888px) {
            display: flex;
            flex-wrap: wrap;
            text-align: center;
            justify-content: center;
            padding: 0;
        }

        @media (max-width: 664px) {
            display: flex;
            flex-wrap: wrap;
        }

        li {
            margin: 3px;
        }
    }

    .hp::before {
        content: "";
        background: url(${hp}) center center no-repeat;
        background-size: contain;
        width: 15px;
        height: 15px;
        display: inline-block;
        margin-right: 4px;
    }
    .attack::before {
        content: "";
        background: url(${attack}) center center no-repeat;
        background-size: contain;
        width: 15px;
        height: 15px;
        display: inline-block;
        margin-right: 4px;
    }
    .defense::before {
        content: "";
        background: url(${def}) center center no-repeat;
        background-size: contain;
        width: 15px;
        height: 15px;
        display: inline-block;
        margin-right: 4px;
    }
    .special-attack::before {
        content: "";
        background: url(${spa}) center center no-repeat;
        background-size: contain;
        width: 15px;
        height: 15px;
        display: inline-block;
        margin-right: 4px;
    }
    .special-defense::before {
        content: "";
        background: url(${spd}) center center no-repeat;
        background-size: contain;
        width: 15px;
        height: 15px;
        display: inline-block;
        margin-right: 4px;
    }
    .speed::before{
        content: "";
        background: url(${speed}) center center no-repeat;
        background-size: contain;
        width: 15px;
        height: 15px;
        display: inline-block;
        margin-right: 4px;
    }
`
const MovesContainer = styled.div`
    box-shadow: -3px 4px 5px #0000007a;
    border: 2px outset #eeeeee7a;
    background-color: white;
    width: 90%;
    height: 35%;
    border-radius: 10px;
    padding: 6px 6px 3px;
    overflow-y: hidden;
    margin: 10px 0;
    border: 3px solid #ffc400;

    @media (max-width: 888px) {
        grid-area: moves;
        width: 95%;
        height: 95%;
        margin: 0;
    }

    @media (max-width: 664px) {
        margin: 10px 0;
        
    }
`
const Moves = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3px;
    text-transform: capitalize;
    overflow-y: scroll;
    height: 80%;
    /* border: 1px solid; */
    
    @media (max-width: 1356px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

const Move = styled.li`
    margin: 5px auto;

    @media (max-width: 888px) {
        margin: 0;
    }

    @media (max-width: 664px) {
        font-size: 13px;
    }
`

const AbilitiesContainer = styled.div`
    height: 37%;
    width: 90%;
    box-shadow: -3px 4px 5px #0000007a;
    border: 2px outset #eeeeee7a;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    padding: 10px;
    border: 3px solid #ffc400;

    @media (max-width: 888px) {
        grid-area: ability;
        width: 100%;
        height: 95%;

        h2 {
            margin: 0;

            @media (max-width: 760px) {
                margin-top: -22px;
            }
        }
    }

    @media (max-width: 664px) {
        font-size: 13px;
    }
   
`

const Abilities = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: nowrap;
    height: 85%;

    @media (max-width: 888px) {
        justify-content: space-between;
        height: 85%;
    }

    @media (max-width: 664px) {
        margin-top: 7px;
    }
`

const Ability = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* padding: 20px 0; */
    margin-top: -30px;
    text-transform: capitalize;

    p {
        margin: 5% 0;
    }

    @media (max-width: 1366px) {
        font-size: 12px;
    }

    @media (max-width: 664px) {
        font-size: 11.5px;
    }
`

const Descriptions = styled.div`
    width: 60%;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
        
    }

    @media (max-width: 1366px) {
        font-size: 12px;
    }

    @media (max-width: 664px) {
        width: 65%;
        font-size: 11.5px;
    }
`