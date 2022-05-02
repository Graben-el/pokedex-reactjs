import styled from "styled-components";

export const Buttons = () => {
    return (
        <Container>
            <Home>
            </Home>
            <ThemeThoggler>
            </ThemeThoggler>
            <Search>
            </Search>
        </Container>
    )
}

const Container = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
`

const Home = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: rgb(250, 55, 55);
    color: rgb(255, 134, 134);
    border: 6px outset black;
    box-shadow: -2px 3px 6px 4px rgba(0, 0, 0, 0.55);
`

const ThemeThoggler = styled.div`
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
    box-shadow: -2px 3px 6px 4px rgba(0, 0, 0, 0.55);
`

const Search = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: rgb(250, 55, 55);
    color: rgb(255, 134, 134);
    border: 6px outset black;
    box-shadow: -2px 3px 6px 4px rgba(0, 0, 0, 0.55);
`