import '/src/Styles/globals.css'
import '/src/Pages/HistoryPage/HistoryPage.css'
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import History from "../../Components/History/History.jsx";

function HistoryPage() {
    return (
        <>
            <div className="about-page-header">
                <Header
                    title="Een stukje geschiedenis"
                    content=""
                />
            </div>
            <main>
                <History/>
            </main>
            <Footer/>
        </>
    )
}

export default HistoryPage

