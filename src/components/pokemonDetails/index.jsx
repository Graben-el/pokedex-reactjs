import { useContext, useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import { getPokemon } from "../../services/getPokemon";
import { isEmpty } from "../../services/getPokemon"; 
import Loading from "../loading/loading";
import { Abilities, AbilitiesContainer, Ability, Container, Descriptions, Details, Image, Move, Moves, MovesContainer, PokemonCard, Stats, Type} from "../../Styled-Components/pokemonDetails/details";
import { TypeContainer } from "../../Styled-Components/types";
import { ThemeContext } from "../contexts/theme-context";

export const PokemonDetails = () => {
    const { theme } = useContext(ThemeContext)

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
                    <PokemonCard theme={theme}>
                        <Image src={ pokemon.sprites?.other['official-artwork'].front_default } />
                        <h1>{ pokemon.name }</h1>
                        <TypeContainer>
                            { pokemon.types.map((element, index) => 
                                <Type typeName={element.type.name} key={index}>{element.type.name}</Type>)
                            }
                        </TypeContainer>
                    </PokemonCard>
                    <Details theme={theme}>
                        <Stats theme={theme}>
                            <h2>Statistics</h2>
                            <ul>
                                { pokemon.stats.map((element, index) => <li key={index} className={element.stat.name}>{element.stat.name}: {element.base_stat}</li>) }
                            </ul>
                        </Stats>

                        <MovesContainer theme={theme}>
                            <h2>Moves</h2>
                            <Moves>
                                { pokemon.moves.map((element, index) => <Move key={index}>{element.move.name}</Move>) }
                            </Moves>
                        </MovesContainer>

                        <AbilitiesContainer theme={theme}>
                            <h2>Abilities</h2>
                            <Abilities>
                                <Ability>
                                    { pokemon.abilities.map((element, index) => {
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
                                    { description?.map((element, index) => {
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
                : 
                <Loading />
            }
        </>
    )
}