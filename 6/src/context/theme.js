import { createContext, useContext, useState } from "react";

const defaultTheme = {
    light: {
        color: 'white',
        backgroundColor: 'brown'
    },
    dark: {
        color: 'brown',
        backgroundColor: 'white'
    }
}

const ThemeContext = createContext(defaultTheme);

const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(defaultTheme.light)

    const toggle = () => {
        setTheme((state) => state === defaultTheme.dark ? defaultTheme.light : defaultTheme.dark)
    }

    return (
        <ThemeContext.Provider value={{theme, toggle}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)

export default ThemeContextProvider