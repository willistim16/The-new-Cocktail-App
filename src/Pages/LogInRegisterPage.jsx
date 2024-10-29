import Header from "../Components/Header.jsx";
// import RegisterForm from "../Components/RegisterForm.jsx";
import '/src/Styles/LogInRegisterPage.css'
import '/src/Styles/RegisterForm.css';
import '/src/Styles/globals.css';
import Footer from "../Components/Footer.jsx";


function LogInRegisterPage() {

    return (
        <>
            <Header title="Log in & Register" />
            <main>
                <div className="button-container">
                    <a>
                        <button>Inloggen</button>
                    </a>
                    <a>
                        <button>Registreren</button>
                    </a>
                </div>
                {/*<RegisterForm />*/}
            </main>
            <Footer/>
        </>
    )
}

export default LogInRegisterPage