import { AppRoutes } from "./pages/routes"
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Pokedex } from "./components/layout/pokedex";
import { PokedexHeader } from "./components/layout/header";
import { Controls } from "./components/layout/gameBoy";
import { Pad } from "./components/layout/gameBoy/pad";
import { Display } from "./components/layout/gameBoy/display";
import { Buttons } from "./components/layout/gameBoy/buttons";

function App() {
  return (
    <Body>
      <GlobalStyle />
      <Pokedex>
        <PokedexHeader />
        <Controls>
          <Pad />
          <Display />
          <Buttons />
        </Controls>
      </Pokedex>
    </Body>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
`
const Body = styled.main`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: 0 auto;
    height: 99vh;
    max-width: 1920px;
    background-color: rgb(0, 179, 255);
`

export default App;
