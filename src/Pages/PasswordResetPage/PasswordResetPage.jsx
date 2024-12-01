import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import '/src/Pages/PasswordResetPage/PasswordResetPage.css';

const API_URL = 'https://api.datavortex.nl/cocktailz';

function PasswordReset() {
    const [searchParams] = useSearchParams();
    const resetToken = searchParams.get("token");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage("De wachtwoorden komen niet overeen.");
            return;
        }


        const username = 'Username';
        try {
            const response = await fetch(`${API_URL}/users/${username}/password-reset`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token: resetToken, password }),
            });
            const data = await response.json();
            if (response.ok) {
                setMessage("Je wachtwoord is succesvol gereset.");
            } else {
                setMessage(data.error || "Er is een fout opgetreden.");
            }
            // eslint-disable-next-line no-unused-vars
        } catch (error) {
            setMessage("Kon geen verbinding maken met de server.");
        }
    };

    return (
        <>
            <div className="header-password-reset-page">
                <Header
                    title="Wachtwoord reset"
                />
            </div>
            <main>
                <form className="password-reset-form" onSubmit={handlePasswordReset}>
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