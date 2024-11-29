import useAuth from '/src/helpers/useAuth.js';
import Header from "../../Components/Header/Header.jsx";
import '/src/Pages/ProfilePage/ProfilePage.css'
import Footer from "../../Components/Footer/Footer.jsx";
import {Link} from "react-router-dom";
import LogoutButton from "../../Components/LogoutButton/LogoutButton.jsx";

function ProfilePage() {
    const { user } = useAuth();

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <>
        <div className="header-profile-page">
            <Header
            title="Profiel pagina"
            content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cum eligendi, el labore libero obcaecati sin"
            />
        </div>
            <main>
                <div className="profile-page-container">
                <div className="profile-page-h1">
                    <h1>Mijn Profiel</h1>
                </div>
                <div className="user-data-profile-page">
                    <div className="user-info-container">
                    <h3>Username:</h3> <p>{user.username}</p>
                    </div>
                    <div className="user-info-container">
                    <h3>Email:</h3> <p>{user.email}</p>
                </div>
                </div>
                    <Link to="/PasswordResetPage">Wachtwoord resetten</Link>
                    <div className="logout-button-profile-page">
                        <LogoutButton>Uitloggen</LogoutButton>
                    </div>
                </div>
            </main>
            <div>
                <Footer/>
            </div>
        </>
    );
};

export default ProfilePage;