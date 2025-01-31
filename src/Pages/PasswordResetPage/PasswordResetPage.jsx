import {useContext, useState} from "react";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import '/src/Pages/PasswordResetPage/PasswordResetPage.css';
import '/src/Styles/globals.css'
import axios from "axios";
import AuthContext from "../../Context/AuthContext/AuthContext.jsx";
import {useTheme} from "../../Context/ThemeContext/ThemeContext.jsx";

const API_URL = 'https://api.datavortex.nl/cocktailz';

function PasswordReset() {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const token = localStorage.getItem("jwt");
    const {user} = useContext(AuthContext)
    const handlePasswordReset = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage("De wachtwoorden komen niet overeen.");
            return;
        }

        try {
            const response = await axios.put(`${API_URL}/users/${user.username}`, {
                password: password,
            },{
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,                }
            });
        } catch (error) {
            console.error(error)
            setMessage("Kon geen verbinding maken met de server.");
        }
    };

    const { theme } = useTheme();

    return (
        <>
            <div
                style={{
                    backgroundImage: theme.backgroundImage,
                    backgroundColor: theme.background,
                    backgroundSize: "cover",
                    color: "#ffffff",
                    transition: "background-color 0.3s, color 0.3s",
                }}
                className="page-header"
            >
                <Header
                    title="Wachtwoord reset"
                />
            </div>
            <main
                style={{
                    backgroundColor: theme.background,
                    transition: "background-color 0.3s",
                }}
            >
                <form
                    style={{
                    backgroundColor: theme.background,
                    transition: "background-color 0.3s",
                }}
                    className="password-reset-form"
                    onSubmit={handlePasswordReset}
                >
                    <label htmlFor="password">Nieuw wachtwoord</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Voer een nieuw wachtwoord in"
                    />
                    <label htmlFor="confirm-password">Bevestig wachtwoord</label>
                    <input
                        type="password"
                        id="confirm-password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        placeholder="Bevestig je nieuwe wachtwoord"
                    />
                    <button type="submit">Reset Wachtwoord</button>
                </form>
                {message && <p className="message">{message}</p>}
            </main>
            <Footer />
        </>
    );
}

export default PasswordReset;