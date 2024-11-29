import NavigationBar from "../NavBar/NavigationBar.jsx";
import '/src/Components/Header/Header.css'



function Header ({content, title}) {

    return (
        <div className="header-group-home">
            <NavigationBar />
            <div className="header-all-pages">
                <h1>
                    {title}
                </h1>
                <p>
                    {content}
                </p>
            </div>
        </div>
    )
}

export default Header