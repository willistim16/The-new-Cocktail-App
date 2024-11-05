import { useState } from 'react';
import FormInput from '/src/Components/FormInput/FormInput.jsx';
import { loginUser } from '/src/services/authServices';
import '/src/Components/Prompts/styles/Prompter.css'

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(handleChange)
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.username) newErrors.username = 'Username is required';
        if (!formData.password) newErrors.password = 'Password is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm())

            return;

        try {
            const response = await loginUser(formData);
            setSuccessMessage('Login successful!');
            setErrorMessage('');
            console.log(response); // You may also want to store a token or update the app state here
        } catch (error) {
            setErrorMessage(error);
            setSuccessMessage('');
        }
    };

    const handleLoginClick = () => {
        setIsModalOpen(true); // Open the modal
    };

    const handleClose = () => {
        setIsModalOpen(false); // Close the modal
    };

    return (
        <div>
            <button onClick={handleLoginClick}>Inloggen</button>

            {isModalOpen && (
                <div className="modalStyle">
                    <h2>Inloggen</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="modalContentStyle">
                            <FormInput
                                label="Username"
                                name="username"
                                type="text"
                                value={formData.username}
                                onChange={handleChange}
                                error={errors.username}
                            />
                            <FormInput
                                label="Password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                error={errors.password}
                            />
                            <div>
                                <button type="submit">Login</button>
                                <button type="button" onClick={handleClose}>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            )}

                    {successMessage && <p style={{color: 'green' }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
};

export default LoginForm;