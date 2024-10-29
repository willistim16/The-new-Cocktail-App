import '/src/Styles/Home.css'
import '/src/Styles/globals.css'
import Header from "../Components/Header.jsx";
import PopularCocktails from "../Components/PopularCocktails.jsx";
import Footer from "../Components/Footer.jsx";

function Home() {
    return (
        <>
            <Header
                title="Welkom!"
                content="
                    Ben jij op zoek naar de juiste cocktail voor de juiste gelegenheid? Dan ben je bij ons op het
                    juiste adres! Vindt je het vaak lastig om te bedenken welke cocktail jij kan maken met de
                    ingredienten die je in huis hebt? Weet je niet wat je nodig hebt voor jouw favoriete cocktail?
                    Kijk dan snel rond en ervaar de talloze cocktails en mocktails!"
            />
            <main>
                <div className="MostPopularHeader">
                    <h2>Top 3 meest populaire cocktails</h2>
                </div>
                    <PopularCocktails/>
                <div className="bannerInbetween">
                    <img alt="banner inbetween" src="/src/assets/Images/Banner.jpg"/>
                </div>
                <div className="paginaUitleg-h2">
                    <h2>Wat kan ik vinden in deze cocktail app</h2>
                </div>
                <div className="paginaUitleg-container">
                    <div className="paginaUitleg">
                        <h3><a  href="/ZoekenFilteren">Zoeken/Filteren pagina</a></h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cum eligendi, et labore libero obcaecati sint? Aliquam amet, animi consequuntur distinctio illo illum iure laboriosam natus, odit quam qui quibusdam sint, unde! Ab adipisci at dolore doloribus earum error facilis labore laborum, nam natus nisi nostrum quasi quidem saepe tenetur.
                        </p>
                    </div>
                    <div className="paginaUitleg">
                        <h3><a  href="/SingleCocktailPage">Single cocktail pagina</a></h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cum eligendi, et labore libero obcaecati sint? Aliquam amet, animi consequuntur distinctio illo illum iure laboriosam natus, odit quam qui quibusdam sint, unde! Ab adipisci at dolore doloribus earum error facilis labore laborum, nam natus nisi nostrum quasi quidem saepe tenetur.
                        </p>
                    </div>
                    <div className="paginaUitleg">
                        <h3><a href="/Favorieten">Favorieten pagina</a></h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cum eligendi, et labore libero obcaecati sint? Aliquam amet, animi consequuntur distinctio illo illum iure laboriosam natus, odit quam qui quibusdam sint, unde! Ab adipisci at dolore doloribus earum error facilis labore laborum, nam natus nisi nostrum quasi quidem saepe tenetur.
                        </p>
                    </div>
                    <div className="paginaUitleg">
                        <h3><a href="/LogInRegisterPage">Inloggen/Registreren pagina</a></h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cum eligendi, et labore libero obcaecati sint? Aliquam amet, animi consequuntur distinctio illo illum iure laboriosam natus, odit quam qui quibusdam sint, unde! Ab adipisci at dolore doloribus earum error facilis labore laborum, nam natus nisi nostrum quasi quidem saepe tenetur.
                        </p>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Home
