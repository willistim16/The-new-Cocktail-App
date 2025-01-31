import { createContext, useContext, useState, useEffect } from "react";
import lightTheme from "../../Styles/lightTheme";
import darkTheme from "../../Styles/darkTheme";
import { usePreferences } from "../PreferencesContext/PreferencesContext.jsx";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const { preferences } = usePreferences();
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark" ? darkTheme : lightTheme;
    });

    useEffect(() => {
        setTheme(preferences.theme === "dark" ? darkTheme : lightTheme);
    }, [preferences.theme]);

    useEffect(() => {
        localStorage.setItem("theme", theme === darkTheme ? "dark" : "light");
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
    };

    const setThemeFromPreferences = (newTheme) => {
        setTheme(newTheme === "dark" ? darkTheme : lightTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setThemeFromPreferences }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);