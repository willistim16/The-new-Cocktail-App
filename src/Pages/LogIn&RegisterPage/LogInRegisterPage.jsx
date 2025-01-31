import Header from "../../Components/Header/Header.jsx";
import RegisterPrompter from "../../Components/Prompters/RegisterPrompter/RegisterPrompter.jsx";
import LogInPrompter from "../../Components/Prompters/LogInPrompter/LogInPrompter.jsx";
import useAuth from "../../../server/useAuth.jsx";
import "/src/Pages/LogIn&RegisterPage/LogInRegisterPage.css"
import Footer from "../../Components/Footer/Footer.jsx";
import {useTheme} from "../../Context/ThemeContext/ThemeContext.jsx";
import "/src/Styles/globals.css"
import Layout from "../../Components/Layout/Layout.jsx";

function LogInRegisterPage() {

    const { user, isAuthenticated } = useAuth();
    const { theme } = useTheme();

    return (
        <>
            <Layout>
            <div className="page-header">
                <Header
                    title="Inloggen & registreren"
                />
            </div>
            <main
                style={{
                    backgroundColor: theme.background,
                    transition: "background-color 0.3s",
                }}
            >
                <div className="login-register-page">
                    {isAuthenticated ? (
                        <>
                            <div className="login-register-page-welcome">
                                <h3>Welkom, {user?.username}!</h3>
                                <p>Je wordt doorgestuurd naar de Zoeken pagina...</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="login-register-page-text">
                                <p>
                                    Al een account? Log dan in en geniet van alles wat deze applicatie te bieden heeft! Heb je nog geen account, registreer je dan met alleen maar je naam, email en wachtwoord!
                                </p>
                            </div>
                            <div className="login-register-page2">
                                <LogInPrompter />
                                <RegisterPrompter />
                            </div>
                        </>
                    )}
                </div>
            </main>
            </Layout>
            <Footer/>
        </>
    );
}

export default LogInRegisterPage;