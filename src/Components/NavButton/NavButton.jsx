import { useNavigate } from 'react-router-dom';
import "/src/Components/NavButton/navButton.css"

const NavButton = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/LogInRegisterPage');
    };

    return (
        <div className="navButton">
        <button onClick={handleButtonClick}>
            Log in & Register
        </button>
        </div>
    );
};

export default NavButton;