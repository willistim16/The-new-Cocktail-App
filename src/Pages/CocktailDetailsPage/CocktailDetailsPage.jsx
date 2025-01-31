import '/src/Styles/globals.css'
import Footer from "../../Components/Footer/Footer.jsx";
import CocktailDetails from "../../Components/CocktailDetails/CocktailDetails.jsx";
import '/src/Pages/CocktailDetailsPage/CocktailDetailsPage.css';
import { useTheme } from "../../Context/ThemeContext/ThemeContext.jsx";
import NavigationBar from "../../Components/NavBar/NavigationBar.jsx";
import { useNavigate } from "react-router-dom";
import Layout from "../../Components/Layout/Layout.jsx";

function SingleCocktailPage() {
    const { theme } = useTheme();
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <>
            <NavigationBar />
            <Layout>
            <main
                style={{
                    backgroundColor: theme.background,
                    transition: "background-color 0.3s",
                }}
                className="main-section-details-page"
            >
                <div className="back-button-container">
                    <button
                        onClick={handleGoBack}
                        className="back-button"
                    >
                        ← Terug
                    </button>
                </div>
                <CocktailDetails />
            </main>
            </Layout>
            <Footer />
        </>
    );
}

export default SingleCocktailPage;