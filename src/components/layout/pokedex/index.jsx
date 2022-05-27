import { useContext } from "react";
import { PokedexContainer, PokedexSectionContainer } from "../../../Styled-Components/layoutStyles/pokedex/pokede";
import { ThemeContext } from "../../contexts/theme-context";


export const Pokedex = (props) => {

    const { theme } = useContext(ThemeContext)

    return (
        <PokedexSectionContainer>
            <PokedexContainer theme={theme}>
                {props.children}
            </PokedexContainer>
        </PokedexSectionContainer>
    )
}

