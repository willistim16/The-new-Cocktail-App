import { useState } from 'react';
import '/src/Styles/LogInnPrompter.css'

function LoginComponent() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginClick = () => {
        setIsModalOpen(true); // Open the modal
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        console.log(`Username: ${username}, Password: ${password}`);
        // Add your authentication logic here
        setIsModalOpen(false); // Close the modal after submission
    };

    const handleClose = () => {
        setIsModalOpen(false); // Close the modal
    };

    return (
        <div>
            <button onClick={handleLoginClick}>Log In</button>

            {/* Modal */}
            {isModalOpen && (
                <div className="modalStyle">
                    <div className="modalContentStyle">
                        <h2>Inloggen</h2>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Username:
                                <div className="ModalInputStyle">
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                            </label>
                            <br />
                            <label>
                                Password:
                                <div className="ModalInputStyle">
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </label>
                            <br/>
                            <button type="submit">Inloggen</button>
                            <button type="button" onClick={handleClose}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LoginComponent;