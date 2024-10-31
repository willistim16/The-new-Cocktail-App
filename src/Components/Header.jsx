import NavigationBar from "./NavigationBar.jsx";
import '/src/Styles/Header.css'


function Header (props) {

    return (
        <div className="headerGroupHome">
            <NavigationBar />
            <div className="HeaderAllPages">
                <h1>
                    {props.title}
                </h1>
                <p>
                    {props.content}
                </p>
            </div>
        </div>
    )
}

export default Header