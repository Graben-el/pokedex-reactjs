import './App.css'
import { createGlobalStyle } from "styled-components";
import { Pokedex } from "./components/layout/pokedex";
import { PokedexHeader } from "./components/layout/header";
import { Body } from "./components/layout/body/body";
import { Controls } from "./components/layout/controls";
import { Pad } from "./components/layout/controls/pad";
import { Buttons } from "./components/layout/controls/buttons";
import { Display } from "./components/layout/controls/display"
import { ThemeProvider } from "./components/contexts/theme-context";
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
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
      </ThemeProvider>
    </BrowserRouter>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    transition: 0.2s ease-in-out
  }
`


export default App;
