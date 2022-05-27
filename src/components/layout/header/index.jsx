import { Lantern } from "./lantern";
import { Pokeball } from "./pokeball";
import LogoPokedex from "../header/poke-logo.png"
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { HeaderContainer, Logo } from "../../../Styled-Components/layoutStyles/header/header";

export const PokedexHeader = () => {

    const {theme} = useContext(ThemeContext)

    return(
        <HeaderContainer>
            <Lantern theme={theme}/>
            <Logo src={LogoPokedex} />
            <Pokeball theme={theme}/>
        </HeaderContainer>
    )
}