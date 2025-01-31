import '/src/Styles/globals.css'
import '/src/Pages/HistoryPage/HistoryPage.css'
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import History from "../../Components/History/History.jsx";
import {useTheme} from "../../Context/ThemeContext/ThemeContext.jsx";
import Layout from "../../Components/Layout/Layout.jsx";

function HistoryPage() {

    const { theme } = useTheme();

    return (
        <>
            <div className="history-page-header">
                <Header/>
            </div>
            <Layout>
            <main
                style={{
                    backgroundColor: theme.background,
                    transition: "background-color 0.3s",
                }}
                >
                <History/>
            </main>
            </Layout>
            <Footer/>
        </>
    )
}

export default HistoryPage

