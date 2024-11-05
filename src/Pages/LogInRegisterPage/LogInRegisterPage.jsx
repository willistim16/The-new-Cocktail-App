import Header from "../../Components/Header/Header.jsx";
import '/src/Pages/LogInRegisterPage/LogInRegisterPage.css'
import '/src/Styles/globals.css';
import Footer from "../../Components/Footer/Footer.jsx";
import RegisterForm from "../../Components/Prompts/Register/RegisterForm.jsx";
import LoginForm from "../../Components/Prompts/LogIn/logInForm.jsx";

function LogInRegisterPage() {

    return (
        <>
            <div className="LoginRegisterPageHeader">
                <Header title="Log in & Register" />
            </div>
            <main>
                <div className="button-container">
                    <a>
                        <LoginForm/>
                    </a>
                    <a>
                        <RegisterForm/>
                    </a>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default LogInRegisterPage