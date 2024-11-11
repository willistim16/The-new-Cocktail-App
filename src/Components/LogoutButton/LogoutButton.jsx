import useAuth from '/src/hooks/useAuth.js'; // Import the Auth context

const LogoutButton = () => {
    const { logout } = useAuth(); // Get the logout function from AuthContext

    const handleLogout = () => {
        logout(); // Trigger logout on click
    };

    return (
        <button onClick={handleLogout} style={buttonStyle}>
            Logout
        </button>
    );
};

// Optional styling for the button
const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#ff4c4c',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
};

export default LogoutButton;