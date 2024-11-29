import { createContext, useState, useContext, useEffect } from "react";
import lightTheme from "../../Styles/lightTheme.jsx";
import darkTheme from "../../Styles/darkTheme.jsx";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(lightTheme);

    // Laad de voorkeur van de gebruiker op uit LocalStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem("appTheme");
        setTheme(savedTheme === "dark" ? darkTheme : lightTheme);
    }, []);

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === lightTheme ? darkTheme : lightTheme;
            localStorage.setItem("appTheme", newTheme === darkTheme ? "dark" : "light");
            return newTheme;
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook om ThemeContext te gebruiken
export const useTheme = () => useContext(ThemeContext);