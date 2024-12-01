import { useTheme } from "/src/Context/ThemeContext/ThemeContext.jsx"
import lightTheme from "../../Styles/lightTheme.jsx";
import '/src/Components/ThemeButton/themebutton.css'
import {motion} from "framer-motion";

const ThemeToggle = () => {
    const { toggleTheme, theme } = useTheme();

    return (
        <div className="theme-button">
            <motion.button
                className="theme-button"
                onClick={toggleTheme}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                transition={{type: "spring", stiffness: 300}}
            >
                {theme === lightTheme ? "Schakel donkere modus in" : "Schakel lichte modus in"}
            </motion.button>
        </div>
    );
};

export default ThemeToggle;
