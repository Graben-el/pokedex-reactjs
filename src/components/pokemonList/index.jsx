import { useEffect, useState } from "react";
import { getPokemon, getPokemonList } from "../../services/getPokemon";
import { ButtonShowMore } from "./buttonShowMore";
import { Input } from "./form";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const PokemonList = () => {
    const requests = 10
    const [offset, setOffset] = useState(0)
    const [pokemons, setPokemons] = useState([])

    const handleOffset = async () => {
        setOffset(offset + requests)
    }

    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
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
                <Container>
                    <Input />
                    <List>
                        {
                            pokemons.map(({ name, sprites, types }, key) => {
                                return (
                                    <Link to={`/pokemon/${name}`} key={key}>
                                        <PokemonCard key={key}>
                                            <img src={sprites?.other['official-artwork'].front_default} alt={name} title={name} />
                                            <h1>{name}</h1>
                                            <TypeContainer>
                                                {types?.map((element, index) => {
                                                    return (
                                                        <Type key={index} typeName={element.type.name}>{element.type.name}</Type>
                                                    )
                                                })}
                                            </TypeContainer>
                                        </PokemonCard>
                                    </Link>
                                )
                            })
                        }
                    </List>
                    <ButtonShowMore handleOffset={handleOffset} />
                </Container>
                : 'Carregando'
            }
        </>
    )
}

const Container = styled.div`
    width: 100%;
    padding: 30px 0;
    a {
        text-decoration: none;
        color: black;

        &:visited {
            color: black;
        }
    }
`

const List = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin-bottom: 20px;
`

const PokemonCard = styled.li`
    text-transform: capitalize; 
    margin: 8px;
    padding: 10px;
    border: 2px outset #cac9c925;
    transition: 0.2s ease-in-out;
    box-shadow: -3px 4px 5px #00000022;

    &:hover {
        transform: scale(1.02);
    }

    img {
        width: 200px;
        filter: drop-shadow(-8px 6px 3px #00000076);
    }
    
`

const TypeContainer = styled.div`
    display: flex;
    justify-content: center;
`

const Type = styled.p`
    margin: 3px;
    width: 40%;
    border: 1px solid #0000001f;
    border-radius: 5px;
    font-size: 15px;
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
                console.log(color)
                return props.typeName = color
            }
        }
    }};
`