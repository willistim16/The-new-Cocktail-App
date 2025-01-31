import { useState } from 'react';
import useAuth from '/src/helpers/useAuth.js'
import {useLocation, useNavigate} from "react-router-dom";
import PrompterInput from "/src/Components/PrompterInput/PrompterInput.jsx";
import "/src/Components/Prompters/PrompterStyles/Prompter.css"
import {motion} from "framer-motion";
import {useTheme} from "../../../Context/ThemeContext/ThemeContext.jsx";

function LogInPrompter() {
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

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
                    const from = location.state?.from?.pathname || '/SearchPage';
                    navigate(from, { replace: true });
                }, 3000);

            } else {
                setErrorMessage(result.message || 'An error occurred');
                setSuccessMessage("");
            }

        } catch (error) {
            console.error("Login error:", error);
            setErrorMessage(error.message || "Login failed. Please try again.");
            setSuccessMessage("");
        }
    };

    const handleClick = () => {
        setIsModalOpen(true);
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };

    const { theme } = useTheme();


    return (
        <div>
            <div className="open-login-button">
                <motion.button whileHover={{scale: 1.1}}
                               whileTap={{scale: 0.9}}
                               transition={{type: "spring", stiffness: 300}}
                               onClick={handleClick}
                >
                    Inloggen
                </motion.button>
            </div>

            {isModalOpen && (
                <div className="modal-style">
                    <form

                        onSubmit={handleSubmit}>
                        <div
                            style={{
                                backgroundColor: theme.background,
                                backgroundBlendMode: "luminosity",
                                transition: "background-color 0.3s",
                            }}
                            className="modal-content-style">
                            <h2>Inloggen</h2>
                            <div className="prompter-input-container">
                                <PrompterInput
                                    label="Username"
                                    name="username"
                                    type="text"
                                    value={formData.username}
                                    onChange={handleChange}
                                    error={errors.username}
                                />
                            </div>
                            <div className="prompter-input-container">
                                <PrompterInput
                                    label="Password"
                                    name="password"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    error={errors.password}
                                />
                            </div>
                                <div className="buttons-prompt-container">
                                    <div className="button-prompt">
                                        <button type="submit">Inloggen</button>
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

export default LogInPrompter;