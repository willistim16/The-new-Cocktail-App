import { useState } from 'react';
import useAuth from '/src/helpers/useAuth.js'
import {useLocation, useNavigate} from "react-router-dom";
import PrompterInput from "/src/Components/PrompterInput/PrompterInput.jsx";
import "/src/Components/Prompts/styles/Prompter.css"

function LoginPrompter() {
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navigate = useNavigate(); // Initialize navigate
    const location = useLocation(); // Initialize location

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.username) newErrors.username = 'Username is required';
        if (!formData.password) newErrors.password = 'Password is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;

    };
    // console.log(validateForm)
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const loginData = {
            username: formData.username,
            password: formData.password,
        };

        try {
            const result = await login(loginData);

            if (result.success) {
                setSuccessMessage("Login successful!");
                setErrorMessage("");
                handleClose()

                setTimeout(() => {
                    const from = location.state?.from?.pathname || '/';
                    navigate(from, { replace: true });
                }, 1000); // Adjust delay as needed

            } else {
                setErrorMessage(result.message || 'An error occurred');
                setSuccessMessage("");
            }

        } catch (error) {
            console.error("Login error:", error);
            setErrorMessage(error.message || "Login failed. Please try again.");
            setSuccessMessage("");
        }
        console.log(handleSubmit)
    };
        console.log(login);


    const handleClick = () => {
        setIsModalOpen(true); // Open the modal
    };

    const handleClose = () => {
        setIsModalOpen(false); // Close the modal
    };



    return (
        <div>
            <div className="open-login-button">
                <button onClick={handleClick}>Inloggen</button>
            </div>


            {isModalOpen && (
                <div className="modal-style">
                    <form onSubmit={handleSubmit}>
                        <div className="modal-content-style">
                            <h2>Inloggen</h2>
                            <PrompterInput
                                label="Username"
                                name="username"
                                type="text"
                                value={formData.username}
                                onChange={handleChange}
                                error={errors.username}
                            />
                            <PrompterInput
                                label="Password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                error={errors.password}
                            />
                            <div className="buttons-prompt-container">
                                <div className="button-prompt">
                                    <button type="submit">Login</button>
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

export default LoginPrompter;