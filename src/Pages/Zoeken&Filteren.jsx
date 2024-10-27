import '/src/Styles/Zoeken&Filteren.css'
import '/src/Styles/globals.css'

function ZoekenFilteren() {
    return (
        <>
            <div className="headerGroup">
                <nav>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Zoeken/Filteren</a></li>
                        <li><a>Favorieten</a></li>
                        <li><a>Registreren</a></li>
                        <li><a>Inloggen</a></li>
                    </ul>
                </nav>
                <div className="Header">
                <h1>
                    Search, Filter & Find!
                </h1>
                </div>
            </div>
            <main>
                <div className="buttonSection">
                    <button>All cocktails</button>
                    <button>Classics</button>
                    <button>Ingredienten</button>
                    <button>Benodigdheden</button>
                    <button>Glazen</button>
                    <button>Sterke dranken</button>
                    <button>Mocktails</button>
                    <button>Populair</button>
                    <button>Easy Prep</button>
                    <button>Filter A-Z</button>
                    {/*<img alt="All cocktails" src="src/assets/Images/All cocktails.jpg">All cocktails</img>*/}
                    {/*<img alt="Classics" src="src/assets/Images/Classics.jpg">Classics</img>*/}
                    {/*<img alt="Ingredienten" src="src/assets/Images/Ingredienten.jpg">Ingredienten</img>*/}
                    {/*<img alt="Benodigdheden" src="src/assets/Images/Benodigdheden2.jpeg">Benodigdheden</img>*/}
                    {/*<img alt="Glazen" src="src/assets/Images/Glazen.jpg">Glazen</img>*/}
                    {/*<img alt="Sterke dranken" src="src/assets/Images/Sterke Dranken.jpg">Sterke dranken</img>*/}
                    {/*<img alt="Mocktails" src="src/assets/Images/Mocktails.jpg">Mocktails</img>*/}
                    {/*<img alt="Populair" src="src/assets/Images/Populair.jpg">Populair</img>*/}
                    {/*<img alt="Easy prep" src="src/assets/Images/Easy Cocktails.jpeg">Easy Prep</img>*/}
                    {/*<img alt="FilterA-Z" src="src/assets/Images/Filter A-Z.jpg">Filter A-Z</img>*/}
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

export default ZoekenFilteren