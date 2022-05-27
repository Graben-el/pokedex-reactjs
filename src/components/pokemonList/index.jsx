import { useContext, useEffect, useState } from "react"; 
import { getPokemon, getPokemonList } from "../../services/getPokemon";
import { ButtonShowMore } from "./buttonShowMore"; 
import { Link } from "react-router-dom";
import Loading from "../loading/loading";
import { isEmpty } from "../../services/getPokemon";
import { ThemeContext } from "../contexts/theme-context";
import { List, ListContainer, PokemonCard, Type} from "../../Styled-Components/pokemonList/pokemonList";
import { TypeContainer } from "../../Styled-Components/types";

export const PokemonList = () => {
    const {theme} = useContext(ThemeContext)

    const requests = 10
    const [offset, setOffset] = useState(0)
    const [pokemons, setPokemons] = useState([])

    const handleOffset = async () => {
        setOffset(offset + requests)
    }

    useEffect(() => {
        const fetchData = async () => {
            const names = await getPokemonList(requests, offset)
            const pokemonsPromises = names.map(async pokemon => await getPokemon(pokemon))
            const pokemonsData = await Promise.all(pokemonsPromises)
                .then(result => result)
            setPokemons([...pokemons, ...pokemonsData])
        }
        fetchData()
    }, [offset])

    return (
        <> 
            {!isEmpty(pokemons) ?
                <ListContainer theme={theme}>
                    <List>
                        { pokemons.map(({ name, sprites, types }, key) => {
                                return (
                                    <Link to={`/pokemon/${name}`} key={key}>
                                        <PokemonCard key={key} theme={theme}>
                                            <img src={sprites?.other['official-artwork'].front_default} alt={name} title={name} />
                                            <h1>{name}</h1>
                                            <TypeContainer>
                                                {types?.map( (element, index) => <Type key={index} typeName={element.type.name}>{element.type.name}</Type> )}
                                            </TypeContainer>
                                        </PokemonCard>
                                    </Link>
                                )
                            })
                        }
                    </List>
                    <ButtonShowMore handleOffset={handleOffset} />
                </ListContainer>
                : 
                <Loading />
            }
        </>
    )
}