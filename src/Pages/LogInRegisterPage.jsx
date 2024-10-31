import Header from "../Components/Header.jsx";
import '/src/Styles/LogInRegisterPage.css'
import '/src/Styles/globals.css';
import Footer from "../Components/Footer.jsx";
import LoginComponent from "../Components/LogInnPrompt.jsx";
import RegisterPrompt from "../Components/RegisterPrompt.jsx";

function LogInRegisterPage() {

    return (
        <>
            <div className="LoginRegisterPageHeader">
                <Header title="Log in & Register" />
            </div>
            <main>
                <div className="button-container">
                    <a>
                        <LoginComponent />
                    </a>
                    <a>
                        <RegisterPrompt />
                    </a>
                </div>
                {/*<RegisterForm />*/}
            </main>
            <Footer/>
        </>
    )
}

export default LogInRegisterPage