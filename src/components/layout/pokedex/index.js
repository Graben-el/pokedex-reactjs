import styled from "styled-components";
import { AppRoutes } from "../../../pages/routes";
import { Controls } from "../gameBoy";
import { PokedexHeader } from "../header";

export const Pokedex = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #FF3334;
    padding: 10px 0;
    width: 95%;
    height: 95%;
    border-radius: 50px;
    border: 5px solid black;
    box-shadow: -2px -4px 5px rgba(0, 0, 0, 0.418);
`