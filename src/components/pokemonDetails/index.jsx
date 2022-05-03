import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getPokemon } from "../../services/getPokemon";

export const PokemonDetails = (props) => {
    const [pokemon, setPokemon] = useState({})
    // const [description, setDescription] = useState()

    const { name } = useParams()

    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    // const getDescription = async (url) => {
    //     const description = await fetch(url)
    //     const descriptionJson = await description.json()
    //     return descriptionJson
    // }

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPokemon(name)
            console.log(data)
            setPokemon(data)
        }
        fetchData()
    }, [])

    return (
        <>
            {!isEmpty(pokemon) ?
                <Container>
                    <PokemonCard>
                        <Image src={pokemon.sprites?.other['official-artwork'].front_default} />
                        <h1>{pokemon.name}</h1>
                        <Type>
                            {pokemon.types.map((element, index) => {
                                return (<p key={index}>{element.type.name}</p>)
                            })}
                        </Type>
                    </PokemonCard>
                    <Details>
                        <div>
                            <h2>Moves</h2>
                            <Moves >
                                {
                                    pokemon.moves.map((element, index) => {
                                        if (index < 10)
                                            return (<Move key={index}>
                                                {element.move.name}
                                            </Move>)
                                    })
                                }
                            </Moves>
                        </div>
                        <div>
                            <h2>Abilities</h2>
                            <Abilities>
                                {
                                    pokemon.abilities.map((element, index) => {
                                        return (
                                            <dl key={index}>
                                                <dt>{element.ability.name}</dt>
                                                <dd>
                        
                                                </dd>
                                            </dl>
                                        )
                                    })
                                }
                            </Abilities>
                        </div>
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

const PokemonCard = styled.div`
    text-transform: capitalize;

    h1 {
        font-size: 2rem;
        margin-bottom: 7px;
    }
`

const Image = styled.img`
    width: 500px;
    margin: -40px;
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
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    h2 {
        margin-bottom: 10px;
    }
`

const Moves = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-transform: capitalize;
`

const Move = styled.li`
    margin: 5px auto;
`

const Abilities = styled.div`
    
`