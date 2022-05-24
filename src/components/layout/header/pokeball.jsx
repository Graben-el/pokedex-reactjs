import styled from "styled-components"

export const Pokeball = () => {
    return(
        <Container>
            <UpperPart />
            <MiddlePart>
                <Circle />   
            </MiddlePart>       
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: rgb(232, 232, 232);
    width: 100px;
    height: 100px;
    border-radius: 50px;
    border: 4px solid rgb(0, 0, 0);
    box-shadow: -2px 3px 6px 4px rgb(0 0 0 / 55%);
    align-self: center;

    @media (max-width: 664px) {
        height: 50px;
        width: 50px;
        margin-top: 10px;
    }
`

const UpperPart = styled.div`
    align-self: flex-start;
    height: 50%;
    width: 100%;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    background-color: red;
    box-shadow: -5px 5px 10px 5px inset rgb(246, 99, 99);
`

const MiddlePart = styled.div`
     display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    height: 5px;
    width: 100%;
    margin-top: -3px;
    background-color: black;
`

const Circle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 50px;
    border: 4px solid black;

    @media (max-width: 664px) {
        height: 18px;
        width: 18px;
    }
`