import '/src/Styles/Zoeken&Filteren.css'
import '/src/Styles/globals.css'
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";

function ZoekenFilteren() {
    return (
        <>
            <div className="headerSearchPage">
                <Header title="Search, Filter & Find!" content="Search and/or filter to find your favorite cocktail!" />
            </div>
            <main>
                <div className="SearchOptionsSection">
                    <div className="searchPageTile">
                        <a>
                            <h3>All cocktails</h3>
                            <img alt="All-cocktails" src="/src/assets/Images/All-cocktails.jpg"/>
                        </a>
                    </div>
                    <div className="searchPageTile">
                        <a>
                            <h3>Ingredienten</h3>
                            <img alt="Ingredienten" src="/src/assets/Images/Ingredienten.jpg"/>
                        </a>
                    </div>
                    <div className="searchPageTile">
                        <a>
                            <h3>Benodigdheden</h3>
                            <img alt="Benodigdheden" src="/src/assets/Images/Benodigdheden2.jpeg"/>
                        </a>
                    </div>
                    <div className="searchPageTile">
                        <a>
                            <h3>Glazen</h3>
                            <img alt="Glazen" src="/src/assets/Images/Glazen.jpg"/>
                        </a>
                    </div>
                    <div className="searchPageTile">
                        <a>
                            <h3>Sterke dranken</h3>
                            <img alt="Sterke-dranken" src="/src/assets/Images/Sterke-Dranken.jpg"/>
                        </a>
                    </div>
                    <div className="searchPageTile">
                        <a>
                            <h3>Mocktails</h3>
                            <img alt="Mocktails" src="/src/assets/Images/Mocktails.jpg"/>
                        </a>
                    </div>
                    <div className="searchPageTile">
                        <a>
                            <h3>Populair</h3>
                            <img alt="Populair" src="/src/assets/Images/Populair.jpg"/>
                        </a>
                    </div>
                    <div className="searchPageTile">
                        <a>
                            <h3>Easy Prep</h3>
                            <img alt="Easy-prep" src="/src/assets/Images/Easy-Cocktails.jpeg"/>
                        </a>
                    </div>
                    <div className="searchPageTile">
                        <a>
                            <h3>Filter A-Z</h3>
                            <img alt="FilterA-Z" src="/src/assets/Images/Filter_A-Z.jpg"/>
                        </a>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default ZoekenFilteren