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
                                    <Type>
                                        {types?.map((element, index) => {
                                            return (
                                                <p key={index}>{element.type.name}</p>
                                            )
                                        })}
                                    </Type>
                                </PokemonCard>
                            </Link>
                        )
                    })
                }
            </List>

            <ButtonShowMore handleOffset={handleOffset} />
        </Container>
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
    }
    
`

const Type = styled.div`
    display: flex;
    justify-content: center;
    p {
        margin: 1px;
        width: 35%;
        border: 1px solid black;
        border-radius: 5px;
    }
`