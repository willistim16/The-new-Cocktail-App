import NavigationBar from "./NavigationBar.jsx";


function Header (props) {

    return (
        <div className="headerGroupHome">
            <NavigationBar />
            <div className="GlobalHeader">
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