function NavigationBar() {

    return (
        <nav>
            <div className="NavItems">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/SearchPage">Zoeken</a></li>
                    <li><a href="/MijnFavorieten">Mijn favorieten</a></li>
                    <li><a href="/AboutPage">About</a></li>
                    <li><a href="/LogInRegisterPage">Inloggen/Registreren</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default NavigationBar;