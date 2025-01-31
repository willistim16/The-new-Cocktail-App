import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import '/src/Styles/globals.css'
import {useTheme} from "../../Context/ThemeContext/ThemeContext.jsx";

function NotFoundPage() {

    const { theme } = useTheme();

    return (
        <>
            <div
                style={{
                backgroundImage: theme.backgroundImage,
                backgroundColor: theme.background,
                transition: "background-color 0.3s, color 0.3s",
            }}
                className="page-header"
            >
                <Header/>
            </div>
            <main
                style={{
                    backgroundColor: theme.background,
                    transition: "background-color 0.3s",
                }}
            >
                <h1>
                    Unfortunatelly we were not able to find the page that you were looking for.
                </h1>
            </main>
            <Footer/>
        </>
    )
}

export default NotFoundPage