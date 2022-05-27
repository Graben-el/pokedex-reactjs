import React, { useContext } from "react";
import { Button } from "../../Styled-Components/pokemonList/buttonShowMore";
import { ThemeContext } from "../contexts/theme-context";

export const ButtonShowMore = props => {
    const { theme } = useContext(ThemeContext)

    return (
        <Button theme={theme} onClick={() => props.handleOffset()}>Show More</Button>
    )
}