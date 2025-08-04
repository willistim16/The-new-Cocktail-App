import { createContext, useContext, useState, useEffect } from "react";
import lightTheme from "../../Styles/lightTheme";
import darkTheme from "../../Styles/darkTheme";
import { usePreferences } from "/src/Context/Preferences/usePreferences.js";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const { preferences } = usePreferences();

    // Store 'light' or 'dark' as state, easier to compare and store in localStorage
    const [themeMode, setThemeMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark" ? "dark" : "light";
    });

    // When preferences change, update theme mode accordingly
    useEffect(() => {
        if (preferences.theme === "dark" || preferences.theme === "light") {
            setThemeMode(preferences.theme);
        }
    }, [preferences.theme]);

    // Save themeMode string to localStorage
    useEffect(() => {
        localStorage.setItem("theme", themeMode);
    }, [themeMode]);

    // Derive theme object from themeMode
    const theme = themeMode === "dark" ? darkTheme : lightTheme;

    // Toggle theme mode string
    const toggleTheme = () => {
        setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };

    // Set theme directly from preferences string
    const setThemeFromPreferences = (newTheme) => {
        if (newTheme === "dark" || newTheme === "light") {
            setThemeMode(newTheme);
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setThemeFromPreferences }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
