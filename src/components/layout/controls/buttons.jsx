import { useContext } from "react";
import { ButtonsContainer, Github, Home, Linkedin, MiddleContainer } from "../../../Styled-Components/layoutStyles/controls/buttons";
import { ThemeContext } from "../../contexts/theme-context";
import { ThemeTogglerButton } from "../../theme-toggler-button/theme-toggler-button";

export const Buttons = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <ButtonsContainer theme={theme}>
            <Home className="button"></Home>
            <MiddleContainer>
                <ThemeTogglerButton />
                <Github className="button" ></Github>
            </MiddleContainer>
            <Linkedin className="button" ></Linkedin>
        </ButtonsContainer>
    )
}


