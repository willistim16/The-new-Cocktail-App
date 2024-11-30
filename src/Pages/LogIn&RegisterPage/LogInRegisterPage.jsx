import Header from "../../Components/Header/Header.jsx";
import RegisterForm from "../../Components/Prompts/Register/RegisterForm.jsx";
import LoginPrompter from "../../Components/Prompts/LogIn/logInPrompter.jsx";
import LogoutButton from "../../Components/LogoutButton/LogoutButton.jsx";
import useAuth from "../../../server/useAuth.jsx";
import "/src/Pages/LogIn&RegisterPage/LogInRegisterPage.css"
import Footer from "../../Components/Footer/Footer.jsx";

function LogInRegisterPage() {
    const { user, isAuthenticated } = useAuth(); // Now fetching both user and isAuthenticated

    return (
        <>
            <div>
                <Header
                    title="Login & Register"
                    content="Al een account? Log dan in en geniet. Zo niet, registreer je dan met alleen maar je naam, email en wachtwoord."
                />
            </div>
            <main>
                <div className="buttons-login-register-page">
                    {isAuthenticated ? (
                        <>
                            <p>Welcome, {user?.username}!</p>
                            <LogoutButton />
                        </>
                    ) : (
                        <>
                            <LoginPrompter />
                            <RegisterForm />
                        </>
                    )}
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default LogInRegisterPage;