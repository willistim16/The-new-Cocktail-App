import useAuth from '/server/useAuth.jsx';
import { motion } from 'framer-motion';

const LogoutButton = () => {
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
    };

    return (
        <motion.button
            className="bouncy-button"
            onClick={handleLogout}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            transition={{type: "spring", stiffness: 300}}
        >
            Uitloggen
        </motion.button>
    );
};

export default LogoutButton;