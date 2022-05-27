import { useContext } from "react";
import { ScrollPad } from "../../../Styled-Components/layoutStyles/controls/pad";
import { ThemeContext } from "../../contexts/theme-context";

export const Pad = () => {
    
    const {theme} = useContext(ThemeContext)

    return(
        <ScrollPad theme={theme}/>
    )
}

