import styled from "styled-components";
import { Lantern } from "./lantern";
import { Pokeball } from "./pokeball";

export const PokedexHeader = () => {
    return(
        <Container>
            <Lantern />
            <Logo src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" />
            <Pokeball />
        </Container>
    )
}

const Container = styled.header`
    display: flex;
    width: 100%;
    padding: 0 15px;
    justify-content: space-between;
    margin-bottom: 30px;
    background-color: transparent;
`

const Logo = styled.img`
    width: 350px;
    background-color: transparent;
`