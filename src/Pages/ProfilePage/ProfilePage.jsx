import useAuth from '/server/useAuth.jsx';
import Header from "../../Components/Header/Header.jsx";
import '/src/Pages/ProfilePage/ProfilePage.css'
import '/src/Styles/globals.css'
import Footer from "../../Components/Footer/Footer.jsx";
import LogoutButton from "../../Components/LogoutButton/LogoutButton.jsx";
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";
import {useTheme} from "../../Context/ThemeContext/ThemeContext.jsx";

function ProfilePage() {
    const { user, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const { theme } = useTheme();

    if (!isAuthenticated) {
        return <p>Please log in to view your profile.</p>;
    }

    if (!user) {
        return <p>Loading...</p>;
    }

    const handleButtonClick = () => {
        navigate("/PasswordResetPage");
    };


    return (
        <>
        <div className="profile-page-header">
            <Header/>
        </div>
            <main>
                <div
                    style={{
                    backgroundColor: theme.background,
                    transition: "background-color 0.3s",
                }}
                    className="profile-page-container">
                    <div className="profile-page-h1">
                        {/*<h1>Mijn Profiel</h1>*/}
                    </div>
                    <div className="user-data-profile-page">
                        <div className="user-info-container">
                            <h3>Username:</h3> <p>{user.username}</p>
                        </div>
                        <div className="user-info-container">
                            <h3>Email:</h3> <p>{user.email}</p>
                        </div>
                    </div>
                        <motion.button
                            className="reset-bouncy-button"
                            onClick={handleButtonClick}
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            transition={{type: "spring", stiffness: 300}}
                        >
                            Wachtwoord resetten
                    </motion.button>
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