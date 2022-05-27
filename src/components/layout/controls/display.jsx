import { useContext } from "react";
import { AppRoutes } from "../../../pages/routes";
import { DisplayContainer, Screen } from "../../../Styled-Components/layoutStyles/controls/display";
import { ThemeContext } from "../../contexts/theme-context";

export const Display = () => {

    const {theme} = useContext(ThemeContext)

    return (
        <>
            <DisplayContainer theme={theme}>
                <Screen theme={theme}>
                    <AppRoutes />
                </Screen>
            </DisplayContainer>
        </>
    )
}

