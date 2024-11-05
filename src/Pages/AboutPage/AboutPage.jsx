import '/src/Styles/globals.css'
import '/src/Pages/AboutPage/AboutPage.css'
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import History from "../../Components/About/About.jsx";

function AboutPage() {
    return (
        <>
            <div className="HomePageHeader">
                <Header
                    title="The story of cocktails"
                    content="De geschiedenis van cocktails begint waarschijnlijk in de 18e eeuw in Amerika en het Verenigd Koninkrijk, hoewel mensen al eeuwenlang alcoholische dranken mixen. Het woord &#34;cocktail&#34; zelf verscheen voor het eerst in druk in 1806 in een Amerikaanse publicatie, waarbij het werd omschreven als een mixdrank gemaakt van gedistilleerde sterke drank, suiker, water en bitters. Deze eenvoudige mix was het begin van wat we nu een klassieke &#34;cocktail&#34; noemen."
                />
            </div>
            <main>
                <History/>
            </main>
            <Footer/>
        </>
    )
}

export default AboutPage

