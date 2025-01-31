import {useState} from "react";
import '/src/Components/Prompters/PrompterStyles/Prompter.css'
import {registerUser} from "../../../services/authServices.jsx";
import PrompterInput from "/src/Components/PrompterInput/PrompterInput.jsx";
import '/src/Components/PrompterInput/PrompterInput.css'
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";
import {useTheme} from "../../../Context/ThemeContext/ThemeContext.jsx";

const RegisterPrompter = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

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
            await registerUser(userData);
            setSuccessMessage("Registration successful!");
            setErrorMessage("");

            setTimeout(() => navigate("/SearchPage"), 1000);
        } catch (error) {
            setErrorMessage(error);
            setSuccessMessage("");
        }
    };


    const handleClose = () => {
        setIsModalOpen(false);
    };

    const handleClick = () => {
        setIsModalOpen(true);
    };

    const { theme } = useTheme();

    return (
        <div>
            <div className="open-register-button">
                <motion.button whileHover={{scale: 1.1}}
                               whileTap={{scale: 0.9}}
                               transition={{type: "spring", stiffness: 300}}
                               onClick={handleClick}
                >
                    Registreren
                </motion.button>
            </div>

            {isModalOpen && (
                <div className="modal-style">
                    <form>
                        <div
                            style={{
                                backgroundColor: theme.background,
                                backgroundBlendMode: "luminosity",
                                transition: "background-color 0.3s",
                            }}
                            className="modal-content-style">
                            <h2>Registreren</h2>
                            <div className="prompter-input-container">
                                <PrompterInput
                                    label="Username: "
                                    name="username"
                                    type="text"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                                {errors.username && <span className="error-message">{errors.username}</span>}
                            </div>
                            <div className="prompter-input-container">
                                <PrompterInput
                                    label="Email: "
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <span className="error-message">{errors.email}</span>}
                            </div>
                            <div className="prompter-input-container">
                                <PrompterInput
                                    label="Password: "
                                    name="password"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                {errors.password && <span className="error-message">{errors.password}</span>}
                            </div>
                            <div className="prompter-input-container">
                                <PrompterInput
                                    label="Confirm Password: "
                                    name="confirmPassword"
                                    type="password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                                {errors.confirmPassword &&
                                    <span className="error-message">{errors.confirmPassword}</span>}
                            </div>
                                <div className="buttons-prompt-container">
                                    <div className="button-prompt">
                                        <button type="submit" onClick={handleSubmit}>Registreren</button>
                                    </div>
                                    <div className="button-prompt">
                                        <button type="button" onClick={handleClose}>Annuleren</button>
                                    </div>
                                </div>
                            </div>
                    </form>
                </div>
            )}
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    )
};

export default RegisterPrompter;