import { createContext, useContext, useState } from "react";
import { themes } from "./themes";

export const ThemeContext = createContext()

export const ThemeProvider = props => {
    const [theme, setTheme] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}