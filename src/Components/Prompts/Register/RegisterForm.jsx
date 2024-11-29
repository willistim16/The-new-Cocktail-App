import {useState} from "react";
import '/src/Components/Prompts/styles/Prompter.css'
import {registerUser} from "../../../services/authServices.jsx";
import PrompterInput from "/src/Components/PrompterInput/PrompterInput.jsx";
import '/src/Components/PrompterInput/PrompterInput.css'

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

        const userData = {
            username: formData.username,
            email: formData.email,
            password: formData.password,
            authorities: [
                { authority: "USER" },
            ],
        };

        try {
            // Send registration request to backend
            await registerUser(userData);
            setSuccessMessage("Registration successful!");
            setErrorMessage("");
        } catch (error) {
            setErrorMessage(error);
            setSuccessMessage("");
        }
        console.log(registerUser)
    };


    const handleClose = () => {
        setIsModalOpen(false); // Close the modal
    };



    return (
        <div>
        <div className="open-register-button">
            <button onClick={handleClick}>Registreren</button>
        </div>

            {isModalOpen && (
                <div className="modal-style">
                    <form onSubmit={handleSubmit}>
                        <div className="modal-content-style">
                            <h2>Registreren</h2>
                            <PrompterInput
                                label="Username: "
                                name="username"
                                type="text"
                                value={formData.username}
                                onChange={handleChange}
                                error={errors.username}
                            />
                            <PrompterInput
                                label="Email: "
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                error={errors.email}
                            />
                            <PrompterInput
                                label="Password: "
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                error={errors.password}
                            />
                            <PrompterInput
                                label="Confirm Password: "
                                name="confirmPassword"
                                type="password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                error={errors.confirmPassword}
                            />
                            <div className="buttons-prompt-container">
                                <div className="button-prompt">
                                    <button type="submit">Registreren</button>
                                </div>
                                <div className="button-prompt">
                                    <button type="button" onClick={handleClose}>Annuleren</button>
                                </div>
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