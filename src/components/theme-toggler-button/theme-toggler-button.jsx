import { faLightbulb } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { ThemeContext } from "../contexts/theme-context"
import { themes } from "../contexts/themes"
import { Button } from "./button"

export const ThemeTogglerButton = (props) => {

    const { theme, setTheme } = useContext(ThemeContext)
    
    return (
        <>
            <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}><FontAwesomeIcon icon={faLightbulb} /></Button>
        </>
    )
}

