import { useContext } from "react"
import { ThemeContext } from "../contexts/theme-context"
import { themes } from "../contexts/themes"
import { Button } from "./button"

export const ThemeTogglerButton = () => {

    const { theme, setTheme } = useContext(ThemeContext)
    
    return (
        <>
            <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>Clique Aqui</Button>
        </>
    )
}

