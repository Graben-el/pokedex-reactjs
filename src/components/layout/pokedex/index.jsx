import styled from "styled-components";

export const Pokedex = ({ children }) => {
    return (
        <SectionContainer>
            <Container>
                {children}
            </Container>
        </SectionContainer>
    )
}

const SectionContainer = styled.section`
    border-radius: 50px;
    width: 95%;
    height: 95%;
    box-shadow: rgb(0 0 0 / 42%) -6px 6px 6px 3px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #FF3334;
    padding: 10px 0;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    border: 5px solid black;
    box-shadow: inset rgb(0 0 0 / 42%) 6px -5px 6px 3px;
`