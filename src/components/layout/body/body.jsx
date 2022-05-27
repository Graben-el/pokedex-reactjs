import { useContext } from "react";
import { BodyContainer } from "../../../Styled-Components/layoutStyles/body/body";
import { ThemeContext } from "../../contexts/theme-context";

export const Body = (props) => {

    const { theme } = useContext(ThemeContext)

    return (
        <BodyContainer theme={theme}>
            {props.children}
        </BodyContainer>
    )
}

