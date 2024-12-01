import { createContext, useState, useContext, useEffect } from "react";
import lightTheme from "../../Styles/lightTheme.jsx";
import darkTheme from "../../Styles/darkTheme.jsx";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(lightTheme);

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

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);