import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getPokemon } from "../../services/getPokemon";
import hp from "../../assets/icons/hp.png"
import attack from "../../assets/icons/attack.png"
import def from "../../assets/icons/def.png"
import spa from "../../assets/icons/spattack.png"
import spd from "../../assets/icons/spdef.png"
import { type } from "@testing-library/user-event/dist/type";

export const PokemonDetails = (props) => {
    const [pokemon, setPokemon] = useState({})
    const [description, setDescription] = useState([])

    const { name } = useParams()

    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

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
                                        if (index < 15)
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
                                            if(index <= 1){
                                                return (
                                                    <p key={index}>{element.ability.name}</p>
                                            )}
                                        })
                                    }
                                </Ability>
                                <Descriptions>
                                    {
                                        description?.map((element, index) => {
                                           if(index <= 1) { if (element.effect_entries[index].language.name === 'en') {
                                                return <p key={index}>{element.effect_entries[index].short_effect}</p>
                                            } else {
                                                return <p key={index}>{element.effect_entries[index + 1].short_effect}</p>
                                            }}
                                        })

                                        // description?.map((element) => {

                                        //     console.log(element)
                                        //     element.effect_entries.map((effect, index) => {
                                        //         console.log(effect)
                                        //         if (effect.language.name === 'en') {
                                        //             return <p key={index}>{effect.short_effect}</p>
                                        //         } else {
                                        //             return <p key={index}>{effect.short_effect}</p>
                                        //         }
                                        //     })
                                        // })
                                    }
                                </Descriptions>
                            </Abilities>
                        </AbilitiesContainer>

                    </Details>
                </Container>
                : 'Carregando'
            }
        </>
    )
}

const Container = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
`

const Stats = styled.div`
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    margin-bottom: 5px;
    padding: 6px;
    border: 2px outset #eeeeee7a;
    box-shadow: -3px 4px 5px #0000007a;
    background-color: white;
    border-radius: 10px;
    
    ul {
        width: 100%;
        padding: 10px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);

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
`

const PokemonCard = styled.div`
    text-transform: capitalize;

    h1 {
        font-size: 2rem;
        margin-bottom: 15px;
    }
`

const Image = styled.img`
    width: 450px;
    /* margin-top: -30px; */
    margin-bottom: -20px;
    filter: drop-shadow(-10px 10px 3px #00000076);
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
`
const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid;
    width: 45%;
    height: 95%;
    border: 10px double gold;
    background-color: #003ad8;
    border-radius: 10px;
    box-shadow: -5px 5px 5px #0000007a;
`

const MovesContainer = styled.div`
    box-shadow: -3px 4px 5px #0000007a;
    border: 2px outset #eeeeee7a;
    background-color: white;
    width: 90%;
    border-radius: 10px;
    padding: 6px 6px 3px;
`
const Moves = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0 20px;
    text-transform: capitalize;
    padding: 10px;
    margin: 10px;
    /* border: 1px solid; */
`

const Move = styled.li`
    margin: 5px auto;
`

const AbilitiesContainer = styled.div`
    height: 33%;
    width: 90%;
    box-shadow: -3px 4px 5px #0000007a;
    border: 2px outset #eeeeee7a;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    padding: 10px;
`

const Abilities = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: nowrap;
    height: 100%;
`

const Ability = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
    margin-top: -30px;
    text-transform: capitalize;
`

const Descriptions = styled.div`
    width: 55%;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    p {
        margin-top: -10px;
    }
`