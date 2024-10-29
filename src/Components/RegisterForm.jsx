import '/src/Styles/RegisterForm.css'

function RegisterForm() {
    return (
        <>
            <form>
                <input type="text" placeholder="First Name...">First Name</input>
                <input type="text" placeholder="Last Name...">Last Name</input>
                <input type="text" placeholder="Email...">Email</input>
                <input type="text" placeholder="Wachtwoord...">Wachtwoord</input>
            </form>
        </>
    )
}

export default RegisterForm