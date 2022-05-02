import styled from "styled-components";
import { Lantern } from "./lantern";
import { Pokeball } from "./pokeball";

export const PokedexHeader = () => {
    return(
        <Container>
            <Lantern />
            <Logo src="../../../../assets/images/poke-logo.png" />
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