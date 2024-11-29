import { useState } from "react";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import '/src/Pages/PasswordResetPage/PasswordResetPage.css';

function PasswordResetRequest() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handlePasswordResetRequest = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/password-reset-request", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            const data = await response.json();
            if (response.ok) {
                setMessage("Een e-mail is verzonden met instructies om je wachtwoord te herstellen.");
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