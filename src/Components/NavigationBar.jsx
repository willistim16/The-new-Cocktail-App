function NavigationBar() {

    return (
        <nav>
            <div className="NavItems">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/ZoekenFilteren">Zoeken/Filteren</a></li>
                    <li><a href="/Favorieten">Favorieten</a></li>
                    <li><a href="/SingleCocktailPage">SingleCocktailPage</a></li>
                    <li><a href="/LogInRegisterPage">Inloggen/Registreren</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default NavigationBar;