import { useNavigate } from 'react-router-dom';
import "/src/Components/LoginRegisterButton/LoginRegisterButton.css"
import {motion} from "framer-motion";

const LoginRegisterButton = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/LogInRegisterPage');
    };

    return (
        <div className="login-register-button">
            <motion.button
                className="bouncy-button"
                onClick={handleButtonClick}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                transition={{type: "spring", stiffness: 300}}
            >
                Log in & Register
            </motion.button>
        </div>
    );
};

export default LoginRegisterButton;