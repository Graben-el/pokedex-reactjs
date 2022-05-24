import styled from "styled-components";

export const Buttons = () => {
    return (
        <Container>
            <Home>
            </Home>
            <MiddleContainer>
                <ShowMore>
                </ShowMore>
                <ThemeThoggler>
                </ThemeThoggler>
            </MiddleContainer>
            <Search>
            </Search>
        </Container>
    )
}

const Container = styled.div`
    width: 300px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    /* background-color: grey; */
    border-radius: 30px;

    @media (max-width: 1124px) {
        display: none;
    }
`

const MiddleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-self: center;
    width: 100%;
    margin: -5px auto
`

const Home = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: rgb(250, 55, 55);
    color: rgb(255, 134, 134);
    border: 6px outset black;
    box-shadow: -2px 3px 6px 3px rgba(0, 0, 0, 0.55);

    @media (max-width: 1500px) {
        width: 80px;
        height: 80px;
    }

    @media (max-width: 1300px) {
        width: 70px;
        height: 70px;
    }
`

const ShowMore = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: rgb(250, 55, 55);
    color: rgb(255, 134, 134);
    border: 6px outset black;
    box-shadow: -2px 3px 6px 3px rgba(0, 0, 0, 0.55);

    @media (max-width: 1500px) {
        width: 80px;
        height: 80px;
    }

    @media (max-width: 1300px) {
        width: 70px;
        height: 70px;
    }
`

const ThemeThoggler = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: rgb(250, 55, 55);
    color: rgb(255, 134, 134);
    border: 6px outset black;
    box-shadow: -2px 3px 6px 3px rgba(0, 0, 0, 0.55);

    @media (max-width: 1500px) {
        width: 80px;
        height: 80px;
    }

    @media (max-width: 1300px) {
        width: 70px;
        height: 70px;
    }
`

const Search = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: rgb(250, 55, 55);
    color: rgb(255, 134, 134);
    border: 6px outset black;
    box-shadow: -2px 3px 6px 3px rgba(0, 0, 0, 0.55);

    @media (max-width: 1500px) {
        width: 80px;
        height: 80px;
    }

    @media (max-width: 1300px) {
        width: 70px;
        height: 70px;
    }
`