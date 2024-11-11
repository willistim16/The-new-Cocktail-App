import Header from "../../Components/Header/Header.jsx";
import RegisterForm from "../../Components/Prompts/Register/RegisterForm.jsx";
import LoginPrompter from "../../Components/Prompts/LogIn/logInPrompter.jsx";
import LogoutButton from "../../Components/LogoutButton/LogoutButton.jsx";
import useAuth from "../../hooks/useAuth.js";
import "/src/Pages/LogIn&RegisterPage/LogInRegisterPage.css"

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
                <div className="buttonsLogInRegisterPage">
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
        </>
    );
}

export default LogInRegisterPage;