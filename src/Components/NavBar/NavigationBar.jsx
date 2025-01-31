import { NavLink } from 'react-router-dom';
import useAuth from '/src/helpers/useAuth';
import '/src/Components/NavBar/NavigationBar.css';
import ThemeToggle from "../ThemeButton/ThemeButton.jsx";
import LoginRegisterButton from "../LoginRegisterButton/LoginRegisterButton.jsx";
import LogoutButton from "../LogoutButton/LogoutButton.jsx";

function Navigationbar() {
    const { isAuthenticated } = useAuth();

    return (
        <div className="nav-ul">
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? 'active-link' : ''}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/HistoryPage"
                            className={({ isActive }) => isActive ? 'active-link' : ''}
                        >
                            Geschiedenis
                        </NavLink>
                    </li>

                    {isAuthenticated ? (
                        <>
                            <li>
                                <NavLink
                                    to="/SearchPage"
                                    className={({ isActive }) => isActive ? 'active-link' : ''}
                                >
                                    Zoeken & filteren
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/MijnFavorieten"
                                    className={({ isActive }) => isActive ? 'active-link' : ''}
                                >
                                    Mijn favorieten
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/ProfilePage"
                                    className={({ isActive }) => isActive ? 'active-link' : ''}
                                >
                                    Mijn profiel
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Instellingen"
                                    className={({ isActive }) => isActive ? 'active-link' : ''}
                                >
                                    Instellingen
                                </NavLink>
                            </li>
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