import '/src/Components/NavBar/NavigationBar.css'
import { Link } from 'react-router-dom';
import useAuth from '/src/helpers/useAuth';
import '/src/Components/NavButton/navButton.css'

function Navigationbar() {
    const { isAuthenticated, logout } = useAuth();  // Get authentication status

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/AboutPage">About</Link></li>

                {isAuthenticated ? (
                    <>
                        <li><Link to="/SearchPage">Search</Link></li>
                        <li><Link to="/MijnFavorieten">My Favorites</Link></li>
                        <li><Link to="/ProfilePage">Profile</Link></li>
                        <div className="navButton">
                        <li><button onClick={() => logout()}>Logout</button></li>
                        </div>
                    </>
                ) : (
                    <li><Link to="/LogInRegisterPage">Login/Register</Link></li>
                )}
            </ul>
        </nav>
    );
}

export default Navigationbar;

// function NavigationBar() {
//
//
//
//     return (
//         <nav>
//             <div className="navLinks">
//                 <ul>
//                     <li><a href="/">Home</a></li>
//                     <li><a href="/AboutPage">About</a></li>
//                     <li>
//                     <NavButton/>
//                     </li>
//
//                     <ProtectedRoute>
//                         <li><a href="/SearchPage">Zoeken</a></li>
//                         <li><a href="/MijnFavorieten">Mijn favorieten</a></li>
//                         <li><a href="/ProfilePage">Mijn profiel</a></li>
//                     </ProtectedRoute>
//                 </ul>
//             </div>
//         </nav>
// )
// }
//
// export default NavigationBar;