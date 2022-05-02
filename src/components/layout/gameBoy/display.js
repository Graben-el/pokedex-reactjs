import styled from "styled-components";
import { AppRoutes } from "../../../pages/routes";

export const Display = () => {
    return (
        <Container>
            <Screen>
                <AppRoutes />
            </Screen>
        </Container>
    )
}

const Container = styled.div`
    background-color: rgb(243, 243, 243);
    width: 1200px;
    margin: 0 15px;
    height: 100%;
    border-radius: 10px;
    border: 4px solid black;
`

const Screen = styled.div`
    border: 10px outset rgba(212, 212, 212, 0.726);
    border-radius: 10px;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
`