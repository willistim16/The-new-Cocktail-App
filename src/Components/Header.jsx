import NavigationBar from "./NavigationBar.jsx";
import '/src/Styles/Header.css'


function Header ({content, title}) {

    return (
        <div className="headerGroupHome">
            <NavigationBar />
            <div className="HeaderAllPages">
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