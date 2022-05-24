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
    margin-bottom: 5px;
    background-color: transparent;
    @media (max-width: 664px) {
        padding: 0 15px;
    }
`

const Logo = styled.img`
    width: 350px;
    background-color: transparent;
    filter: drop-shadow(-10px 10px 3px #00000076);
    align-self: center;

    @media (max-width: 1366px) {
        width: 325px;
    }

    @media (max-width: 664px) {
        width: 200px;
    }
`