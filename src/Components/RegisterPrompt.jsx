import {useState} from 'react';
import '/src/Styles/LogInRegisterPage.css'
import '/src/Styles/RegisterPrompt.css'
import registerPrompt from "./RegisterPrompt.jsx";
// import {post} from "axios";
// import {get} from "react-hook-form";
// import {post} from "axios";

function RegisterPrompt() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegisterClick = () => {
        setIsModalOpen(true); // Open the modal
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault(); // Prevent the default form submission
    //     // console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
    //     // Add your registration logic here
    //     setIsModalOpen(false); // Close the modal after submission


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !email || !password) {
            setMessage('All fields are required.');
            return;
        }

        const newUser = { username, email, password };

        try {
            const response = await fetch('https://https://api.datavortex.nl/testapp/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key':'cocktailz:USV5LEcOTFZIGPMSzyIY',
                },
                body: JSON.stringify(newUser),
            });

            const {ok} = response;
            if (!ok) {
                setMessage('Failed to register user.');
            } else {
                setMessage('User registered successfully!');
            }
            // eslint-disable-next-line no-unused-vars
        } catch (error) {
            setMessage('An error occurred. Please try again later.');
        }
    };


    const handleClose = () => {
        setIsModalOpen(false); // Close the modal
    };

    return (
        <div>
            <button onClick={handleRegisterClick}>Register</button>

            {/* Modal */}
            {isModalOpen && (
                <div className="modalStyle">
                    <div className="modalContentStyle RegisterPage">
                        <h2>Registeren</h2>
                        <form  id="registerForm" name="registerForm" onSubmit={handleSubmit}>
                            <label>
                                Username:
                                <div className="ModalInputStyle">
                                    <input
                                        autoComplete="username"
                                        name="username"
                                        id={username}
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                            </label>
                            <br/>
                            <label>
                                Email:
                                <div className="ModalInputStyle">
                                    <input
                                        autoComplete="email"
                                        name="email"
                                        id={email}
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </label>
                            <br/>
                            <label>
                                Password:
                                <div className="ModalInputStyle">
                                    <input
                                        autoComplete="password"
                                        name="password"
                                        id={password}
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </label>
                            <br/>
                            <div className="buttonsPrompt">
                                <button type="submit">Registeren</button>
                                <button type="button" onClick={handleClose}>Cancel</button>
                            </div>
                        </form>
                        {message && <p>{message}</p>}
                    </div>
                </div>
            )}
        </div>
    );
}


export default RegisterPrompt