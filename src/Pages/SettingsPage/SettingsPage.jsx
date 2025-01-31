import Footer from '../../Components/Footer/Footer';
import Preferences from '../../Components/Preferences/Preferences';
import './SettingsPage.css';
import '/src/Styles/globals.css'
import {useTheme} from "../../Context/ThemeContext/ThemeContext.jsx";
import NavigationBar from "../../Components/NavBar/NavigationBar.jsx";

function SettingsPage() {
    const { theme } = useTheme();

    return (
        <>
            <NavigationBar/>
            <main
                style={{
                    backgroundColor: theme.background,
                    transition: "background-color 0.3s",
                }}
                className="settings-page"
            >
                <Preferences />
            </main>
            <Footer />
        </>
    );
}

export default SettingsPage;