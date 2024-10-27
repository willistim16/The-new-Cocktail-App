import '/src/Styles/Home.css'
import '/src/Styles/globals.css'

function Home() {
    return (
        <>
            <div className="headerGroupHome">
                <nav>
                    <div className="NavItems">
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>Zoeken/Filteren</a></li>
                            <li><a>Favorieten</a></li>
                            <li><a>Registreren</a></li>
                            <li><a>Inloggen</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="HeaderHome">
                    <h1>
                        Welcome!
                    </h1>
                    <p>
                        Ben jij op zoek naar de juiste cocktail voor de juiste gelegenheid? Dan ben je bij ons op het
                        juiste adres! Vindt je het vaak lastig om te bedenken welke cocktail jij kan maken met de
                        ingredienten die je in huis hebt? Weet je niet wat je nodig hebt voor jouw favoriete cocktail?
                        Kijk dan snel rond en ervaar de talloze cocktails en mocktails!
                    </p>
                </div>
            </div>
            <main>
                <div className="Top3-h2">
                    <h2>Top 3 most popular cocktails</h2>
                </div>
                <div className="mostPopularContainer">
                    <div  className="MostPopularHome">
                        <a href="http://https://cocktailicious.nl/pina-colada/">
                            <img alt="mostPopularCocktail1" src="/src/assets/Images/Pina%20Colada.jpg"/>
                        </a>
                        <p>
                            The Piña Colada is a tropical cocktail that’s creamy, sweet, and refreshing, known for its smooth blend of rum, coconut cream, and pineapple juice. Served chilled or blended with ice, it has a luscious, fruity flavor that transports you to a sunny beach. Often garnished with a pineapple slice or cherry, this iconic drink is a go-to choice for those craving a taste of the tropics.
                        </p>
                    </div>
                    <div className="MostPopularHome">
                        <a>
                            <img alt="mostPopularCocktail2" src="/src/assets/Images/Tequila%20Sunrise.jpeg"/>
                        </a>
                        <p>
                            The Tequila Sunrise is a classic cocktail with a striking layered look, resembling a sunrise. Made with tequila, orange juice, and a touch of grenadine syrup, it features a smooth, sweet, and citrusy flavor. Served over ice in a highball glass, the grenadine sinks to the bottom, creating a beautiful gradient from red to orange. It&#39;s typically garnished with an orange slice or cherry.
                        </p>
                    </div>
                    <div className="MostPopularHome">
                        <a>
                            <img alt="mostPopularCocktail3" src="/src/assets/Images/Sex%20on%20the%20beach.jpg"/>
                        </a>
                        <p>
                            The Sex on the Beach cocktail is a fruity and refreshing drink known for its tropical flavors and vibrant color. Made with vodka, peach schnapps, cranberry juice, and orange juice, it combines sweet and tart elements for a balanced taste. Typically served over ice in a highball glass and garnished with an orange slice or cherry, this cocktail is a popular choice for summer gatherings and beach parties.
                        </p>
                    </div>
                </div>
                <div className="bannerInbetween">
                    <img alt="banner inbetween" src="/src/assets/Images/Banner.jpg"/>
                </div>
                <div className="paginaUitleg-h2">
                    <h2>Wat kan ik vinden in deze cocktail app</h2>
                </div>
                <div className="paginaUitleg-container">
                    <div className="paginaUitleg">
                        <h3><a>Zoeken/Filteren pagina</a></h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cum eligendi, et labore libero obcaecati sint? Aliquam amet, animi consequuntur distinctio illo illum iure laboriosam natus, odit quam qui quibusdam sint, unde! Ab adipisci at dolore doloribus earum error facilis labore laborum, nam natus nisi nostrum quasi quidem saepe tenetur.
                        </p>
                    </div>
                    <div className="paginaUitleg">
                        <h3><a>Single cocktail pagina</a></h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cum eligendi, et labore libero obcaecati sint? Aliquam amet, animi consequuntur distinctio illo illum iure laboriosam natus, odit quam qui quibusdam sint, unde! Ab adipisci at dolore doloribus earum error facilis labore laborum, nam natus nisi nostrum quasi quidem saepe tenetur.
                        </p>
                    </div>
                    <div className="paginaUitleg">
                        <h3><a>Favorieten pagina</a></h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cum eligendi, et labore libero obcaecati sint? Aliquam amet, animi consequuntur distinctio illo illum iure laboriosam natus, odit quam qui quibusdam sint, unde! Ab adipisci at dolore doloribus earum error facilis labore laborum, nam natus nisi nostrum quasi quidem saepe tenetur.
                        </p>
                    </div>
                    <div className="paginaUitleg">
                        <h3><a>Inloggen/Registreren pagina</a></h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cum eligendi, et labore libero obcaecati sint? Aliquam amet, animi consequuntur distinctio illo illum iure laboriosam natus, odit quam qui quibusdam sint, unde! Ab adipisci at dolore doloribus earum error facilis labore laborum, nam natus nisi nostrum quasi quidem saepe tenetur.
                        </p>
                    </div>
                </div>
            </main>
            <footer>
                <p>
                    @created & built by <strong>Tim Willis</strong>
                </p>
            </footer>

        </>
    )
}

export default Home
