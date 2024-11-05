import FormInput from '/src/Components/FormInput/FormInput.jsx';
import { registerUser } from '/src/services/authServices.jsx';
import {useState} from "react";
import '/src/Components/Prompts/styles/Prompter.css'


const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleClick = () => {
        setIsModalOpen(true); // Open the modal
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.username || formData.username.length < 4) {
            newErrors.username = 'Username must be at least 4 characters';
        }
        if (!formData.email.includes('@')) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!formData.password || formData.password.length < 6) {
            newErrors.password = 'Password should be at least 6 characters';
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        try {
            await registerUser(formData);
            setSuccessMessage('Registration successful!');
            setErrorMessage('');
        } catch (error) {
            setErrorMessage(error);
            setSuccessMessage('');
        }
    };

    const handleClose = () => {
        setIsModalOpen(false); // Close the modal
    };



    return (
        <div>
            <button onClick={handleClick}>Register</button>

            {isModalOpen && (
                <div className="modalStyle">
                        <h2>Registreren</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="modalContentStyle">
                            <FormInput
                                label="Username: "
                                name="username"
                                type="text"
                                value={formData.username}
                                onChange={handleChange}
                                error={errors.username}
                            />
                            <FormInput
                                label="Email: "
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                error={errors.email}
                            />
                            <FormInput
                                label="Password: "
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                error={errors.password}
                            />
                            <FormInput
                                label="Confirm Password: "
                                name="confirmPassword"
                                type="password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                error={errors.confirmPassword}
                            />
                            <div className="buttonsPrompt">
                                <button type="submit">Registreren</button>
                                <button type="button" onClick={handleClose}>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            )}
            {successMessage && <p style={{color: 'green'}}>{successMessage}</p>}
            {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
        </div>
    )
};

export default RegisterForm;