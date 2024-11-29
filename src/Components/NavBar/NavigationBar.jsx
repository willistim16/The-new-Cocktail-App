import { Link } from 'react-router-dom';
import useAuth from '/src/helpers/useAuth';
import '/src/Components/NavBar/NavigationBar.css'
import ThemeToggle from "../ThemeButton/ThemeButton.jsx";
import LoginRegisterButton from "../LoginRegisterButton/LoginRegisterButton.jsx";
import LogoutButton from "../LogoutButton/LogoutButton.jsx";

function Navigationbar() {
    const { isAuthenticated } = useAuth();

    return (
        <div className="nav-ul">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/AboutPage">About</Link></li>

                    {isAuthenticated ? (
                        <>
                            <li><Link to="/SearchPage">Zoeken & filteren</Link></li>
                            <li><Link to="/MijnFavorieten">Mijn favorieten</Link></li>
                            <li><Link to="/ProfilePage">Mijn profiel</Link></li>
                            <li><Link to="/Instellingen">Instellingen</Link></li>
                            <LogoutButton>Uitloggen</LogoutButton>
                        </>
                    ) : (
                        <LoginRegisterButton/>
                    )}
                    <ThemeToggle/>
                </ul>
            </nav>
        </div>
    );
}

export default Navigationbar;