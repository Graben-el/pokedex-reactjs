import styled from "styled-components";
import { Lantern } from "./lantern";
import { Pokeball } from "./pokeball";
import LogoPokedex from "../header/poke-logo.png"

export const PokedexHeader = () => {
    return(
        <Container>
            <Lantern />
            <Logo src={LogoPokedex} />
            <Pokeball />
        </Container>
    )
}

const Container = styled.header`
    display: flex;
    width: 100%;
    padding: 0 30px;
    justify-content: space-between;
    margin-bottom: 30px;
    background-color: transparent;
`

const Logo = styled.img`
    width: 350px;
    background-color: transparent;
    filter: drop-shadow(-10px 10px 3px #00000076);
`