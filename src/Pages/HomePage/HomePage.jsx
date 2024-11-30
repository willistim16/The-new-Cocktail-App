import '/src/Pages/HomePage/Home.css'
import '/src/Styles/globals.css'
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import RandomCocktails from "../../Components/RandomCocktails/RandomCocktails.jsx";
import ProtectedLink from "../../Components/ProtectedLink/ProtectedLink.jsx";
import {Link} from "react-router-dom";
import CocktailQuiz from "../../Components/CocktailQuiz/CocktailQuiz.jsx";


function Home() {
    return (
        <>
            <div className="home-page-header">
                <Header
                    title="Welkom!"
                    content="
                        Ben jij op zoek naar de juiste cocktail voor de juiste gelegenheid? Dan ben je bij ons op het
                        juiste adres! Vindt je het vaak lastig om te bedenken welke cocktail jij kan maken met de
                        ingredienten die je in huis hebt? Weet je niet wat je nodig hebt voor jouw favoriete cocktail?
                        Kijk dan snel rond en ervaar de talloze cocktails en mocktails!"
                />
            </div>
            <main>
                <div className="page-description-h2">
                    <h2>Wat heeft deze app allemaal te bieden?</h2>
                </div>

                <img alt="banner inbetween" src="/src/assets/Images/Banner.jpg" className="banner-inbetween"/>

                <div className="page-description-container">
                    <div className="page-description-tile">
                        <div className="page-description">
                            <ProtectedLink>
                                <h3><Link to="/SearchPage">Cocktails Zoeken & Filteren</Link></h3>
                            </ProtectedLink>
                            <p>
                                Zoek de lekkerste cocktails op naam en filter de gehele lijst met cocktails op
                                alcoholisch of non-alcoholisch, welk glas je wilt gebruiken, welke category cocktails je
                                wilt zien of voer een ingredient in (die je misschien thuis hebt liggen) om te zien
                                welke cocktails deze bevat.
                            </p>
                        </div>
                        <img src="src/assets/Images/DALL·E 2024-11-28 16.15.52 - An animated depiction of searching for cocktails. The image features a search bar at the top, where the word 'Cocktails' is typed, with an animated co.webp" alt="search-image"/>
                    </div>
                    <img alt="banner inbetween" src="/src/assets/Images/Banner.jpg" className="banner-inbetween"/>

                    <div className="page-description-tile2">
                        <div className="page-description">
                            <ProtectedLink>
                                <h3><Link to="/MijnFavorieten">Mijn Favorieten</Link></h3>
                            </ProtectedLink>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cum eligendi, et
                                labore
                                libero obcaecati sint? Aliquam amet, animi consequuntur distinctio illo illum iure
                                laboriosam natus, odit quam qui quibusdam sint, unde! Ab adipisci at dolore doloribus
                                earum
                                error facilis labore laborum, nam natus nisi nostrum quasi quidem saepe tenetur.
                            </p>
                        </div>
                        <img src="src/assets/Images/Favorieten.webp" alt="Mijn Favorieten"/>
                    </div>

                    <img alt="banner inbetween" src="/src/assets/Images/Banner.jpg" className="banner-inbetween"/>

                    <div className="page-description-tile">
                        <div className="page-description">
                            <h3><Link to="/LogIn&RegisterPage">Inloggen & Registreren</Link></h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cum eligendi, et
                                labore
                                libero obcaecati sint? Aliquam amet, animi consequuntur distinctio illo illum iure
                                laboriosam natus, odit quam qui quibusdam sint, unde! Ab adipisci at dolore doloribus
                                earum
                                error facilis labore laborum, nam natus nisi nostrum quasi quidem saepe tenetur.
                            </p>
                        </div>
                        <img src="src/assets/GIF's/gif login.webp" alt="Inloggen"/>
                    </div>
                </div>

                <img alt="banner inbetween" src="/src/assets/Images/Banner.jpg" className="banner-inbetween"/>

                <div className="quiz-h2">
                    <h2>Test jouw cocktail kennis met deze quiz!</h2>
                </div>
                <div>
                    <CocktailQuiz/>
                </div>

                <img alt="banner inbetween" src="/src/assets/Images/Banner.jpg" className="banner-inbetween"/>

                <div className="random-cocktails-h2">
                    <h2>Iedere keer weer een andere cocktail, iedere keer weer een feestje!</h2>
                </div>
                <div className="random-cocktails">
                    <RandomCocktails/>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Home
