import { useContext } from "react";
import { ButtonsContainer, Github, Home, Linkedin, MiddleContainer } from "../../../Styled-Components/layoutStyles/controls/buttons";
import { ThemeContext } from "../../contexts/theme-context";
import { ThemeTogglerButton } from "../../theme-toggler-button/theme-toggler-button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";

export const Buttons = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <ButtonsContainer theme={theme}>
            <Link to='/pokedex-reactjs'>
                <Home className="button">
                    <FontAwesomeIcon icon={faHome} />
                </Home>
            </Link>
            <MiddleContainer>
                <ThemeTogglerButton />
                <a href='https://github.com/Graben-el' target='_blank'>
                    <Github className="button" >
                        <FontAwesomeIcon icon={faGithub} />
                    </Github>
                </a>
            </MiddleContainer>
            <a href='https://www.linkedin.com/in/gabriel-rodrigues-da-silva-966163231/' target='_blank'>
                <Linkedin className="button" >
                    <FontAwesomeIcon icon={faLinkedin} />
                </Linkedin>
            </a>
        </ButtonsContainer>
    )
}


