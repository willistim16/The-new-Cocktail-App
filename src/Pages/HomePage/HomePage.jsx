import '/src/Pages/HomePage/Home.css'
import '/src/Styles/globals.css'
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import RandomCocktails from "../../Components/RandomCocktails/RandomCocktails.jsx";
import ProtectedLink from "../../Components/ProtectedLink/ProtectedLink.jsx";
import {Link, useNavigate} from "react-router-dom";
import CocktailQuiz from "../../Components/CocktailQuiz/CocktailQuiz.jsx";
import { useTheme } from "/src/Context/ThemeContext/ThemeContext.jsx";
import Layout from "../../Components/Layout/Layout.jsx";
import useAuth from "../../helpers/useAuth.js";


function Home() {

    const { theme } = useTheme();
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();

    const handleLogInRegisterRedirect = (event) => {
        if (isAuthenticated) {
            event.preventDefault();
            navigate("/SearchPage");
        }
    };

    return (
        <>
            <Layout>
            <div className="home-page-header">
                <Header
                    title="Welkom!"
                    content="Ben jij op zoek naar de juiste cocktail voor de juiste gelegenheid? Dan ben je bij ons op het
                     juiste adres! Vindt je het vaak lastig om te bedenken welke cocktail jij kan maken met de
                     ingredienten die je in huis hebt? Weet je niet wat je nodig hebt voor jouw favoriete cocktail?
                     Kijk dan snel rond en ervaar de talloze cocktails en mocktails!"
                />
            </div>
            <main
                style={{
                    backgroundColor: theme.background,
                    transition: "background-color 0.3s",
                }}
            >
                <div className="page-description-h2">
                    <h2>Wat kun je allemaal met deze cocktail applicatie?</h2>
                </div>

                <div className="page-description-container">
                    <div className="page-description-tile">
                        <div className="page-description">
                            <h3>
                                <ProtectedLink>
                                    <Link to="/SearchPage">Cocktails Zoeken & Filteren</Link>
                                </ProtectedLink>
                            </h3>
                            <p>
                                Zoek de lekkerste cocktails op naam en filter de gehele lijst met cocktails op
                                alcoholisch of non-alcoholisch, welk glas je wilt gebruiken, welke category cocktails je
                                wilt zien of voer een ingredient in (die je misschien thuis hebt liggen) om te zien
                                welke cocktails deze bevat.
                            </p>
                        </div>
                        <ProtectedLink >
                            <Link to="/SearchPage" style={{ textDecoration: "none" }}>
                                <img
                                    src="/src/assets/Images/ZoekenAfbeelding.webp"
                                    alt="search-image"
                                    style={{ display: "block", border: "none"}}
                                />
                            </Link>
                        </ProtectedLink>
                    </div>

                    <div className="page-description-tile2">
                        <div className="page-description">
                            <h3>
                                <ProtectedLink>
                                    <Link to="/MijnFavorieten">Mijn Favorieten</Link>
                                </ProtectedLink>
                            </h3>
                            <p>
                                Gebruikers kunnen favoriete cocktails opslaan via een knop op de Zoeken&Filteren- en Details-pagina. De favorieten worden bewaard in het profiel en bij elk bezoek direct weergegeven. De lijst wordt automatisch bijgewerkt bij toevoegen of verwijderen.
                            </p>
                        </div>
                        <ProtectedLink>
                            <Link to="/MijnFavorieten" style={{ textDecoration: "none" }}>
                                <img
                                    src="src/assets/Images/Favorieten.webp"
                                    alt="Mijn Favorieten"
                                    style={{ display: "block", border: "none" }}
                                />
                            </Link>
                        </ProtectedLink>
                    </div>

                    <div className="page-description-tile">
                        <div className="page-description">
                            <h3>
                                <Link to="/LogInRegisterPage" onClick={handleLogInRegisterRedirect}>
                                    Inloggen & Registreren
                                </Link>
                            </h3>
                            <p>
                                Gebruikers kunnen eenvoudig inloggen of registreren met een gebruikersnaam, e-mail en wachtwoord. Na registratie is direct inloggen mogelijk. Ingelogde gebruikers krijgen toegang tot persoonlijke functies zoals favorieten en beoordelingen.
                            </p>
                        </div>
                        <Link to="/LogInRegisterPage"  style={{ textDecoration: "none" }}>
                            <img
                                src="src/assets/GIF's/gif login.webp"
                                alt="Inloggen"
                                style={{ display: "block", border: "none" }}
                                onClick={handleLogInRegisterRedirect}
                            />
                        </Link>
                    </div>
                </div>

                <img
                    alt="banner inbetween"
                    src="/src/assets/Images/Banner.webp"
                    className="banner-inbetween"
                />

                <div className="quiz-h2">
                    <h2>Test jouw cocktail kennis met deze quiz!</h2>
                </div>
                <div>
                    <CocktailQuiz />
                </div>

                <img
                    alt="banner inbetween"
                    src="/src/assets/Images/Banner.webp"
                    className="banner-inbetween"
                />

                <div className="random-cocktails-h2">
                    <h2>Iedere keer een andere cocktail, iedere keer weer een feestje!</h2>
                </div>
                <div className="random-cocktails">
                    <RandomCocktails />
                </div>
            </main>
            </Layout>
            <Footer />
        </>
    );
}

export default Home;
