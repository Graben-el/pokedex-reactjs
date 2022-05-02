import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
        <section>
            {!isEmpty(pokemon) ?
                <>
                    <div>
                        <img src={pokemon.sprites?.other['official-artwork'].front_default} />
                        <h1>{pokemon.name}</h1>
                        {pokemon.types.map((element, index) => {
                            return (<p key={index}>{element.type.name}</p>)
                        })}
                    </div>
                    <div>
                        <h2>Moves</h2>
                        <ul>
                            {
                                pokemon.moves.map((element, index) => {
                                    if (index < 11)
                                        return (<li key={index}>
                                            {element.move.name}
                                        </li>)
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <h2>Abilities</h2>
                        <div>
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
                        </div>
                    </div>
                </>
                : 'Carregando'
            }
        </section>
    )
}


