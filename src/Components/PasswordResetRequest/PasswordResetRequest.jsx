import {useContext, useState} from "react";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import '/src/Pages/PasswordResetPage/PasswordResetPage.css';
import AuthContext from "../../Context/AuthContext/AuthContext.jsx";
import axios from "axios";

function PasswordResetRequest() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const API_URL = 'https://api.datavortex.nl/cocktailz';
    const {user} = useContext(AuthContext)
    const token = localStorage.getItem("jwt");

    const handlePasswordResetRequest = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`${API_URL}/users/${user.username}`, {
                password: ""},{
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,                }

            });

        } catch (error) {
            setMessage("Kon geen verbinding maken met de server.");
        }
    };

    return (
        <>
            <Header title="Wachtwoord herstellen" content="Voer je e-mailadres in om een herstelverzoek te versturen." />
            <main>
                <form className="password-reset-form" onSubmit={handlePasswordResetRequest}>
                    <label htmlFor="email">E-mailadres</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Voer je e-mailadres in"
                    />
                    <button type="submit">Stuur herstelverzoek</button>
                </form>
                {message && <p className="message">{message}</p>}
            </main>
            <Footer />
        </>
    );
}

export default PasswordResetRequest;