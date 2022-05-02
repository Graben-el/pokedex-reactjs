import styled from "styled-components";
import { Buttons } from "./buttons";
import { Display } from "./display";
import { Pad } from "./pad";

export const Controls = ({ children }) => {
    return (
    <Container>
        {children}
    </Container>)
}

const Container = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 80%;
    padding: 10px;
    border-radius: 10px;
`