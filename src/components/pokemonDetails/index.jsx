import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getPokemon } from "../../services/getPokemon";
import hp from "../../assets/icons/hp.png"

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
                        {console.log(pokemon)}

                        <Image src={pokemon.sprites?.other['official-artwork'].front_default} />
                        <h1>{pokemon.name}</h1>
                        <Type>
                            {pokemon.types.map((element, index) => {
                                return (<p key={index}>{element.type.name}</p>)
                            })}
                        </Type>
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
                                            return (
                                                <p key={index}>{element.ability.name}</p>
                                            )
                                        })
                                    }
                                </Ability>
                                <Descriptions>
                                    {
                                        description?.map((element, index) => {
                                            if (element.effect_entries[index].language.name === 'en') {
                                                return <p key={index}>{element.effect_entries[index].short_effect}</p>
                                            } else {
                                                return <p key={index}>{element.effect_entries[index + 1].short_effect}</p>
                                            }
                                        })}
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
        background-image: url('../../assets/icons/hp.png');
        width: 100px;
        height: 100px;
    }
`

const PokemonCard = styled.div`
    text-transform: capitalize;

    h1 {
        font-size: 2rem;
        margin-bottom: 7px;
    }
`

const Image = styled.img`
    width: 450px;
    margin-top: -30px;
`

const Type = styled.div`
    display: flex;
    justify-content: center;
    p {
        margin: 3px;
        width: 20%;
        border: 1px solid black;
        border-radius: 5px;
        font-size: 18px;
    }
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid;
    width: 45%;
    height: 98%;
    border: 10px double gold;
    background-color: #00B3FF;
    border-radius: 10px;
`

const MovesContainer = styled.div`
    border: 2px outset #eeeeee7a;
    background-color: white;
    width: 90%;
    border-radius: 10px;
    padding: 6px;
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
    height: 35%;
    width: 90%;
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
    justify-content: space-around;
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
    justify-content: space-around;
`