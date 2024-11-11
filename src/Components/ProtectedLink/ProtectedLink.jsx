import { Link } from 'react-router-dom';
import useAuth from '/src/helpers/useAuth.js'

const ProtectedLink = ({ to, children }) => {
    const { jwt } = useAuth(); // Access user from context

    if (!jwt) {
        return (
            <span style={disabledLinkStyle} title="Login required to access">
                {children}
            </span>
        ); // Render a disabled link with a tooltip
    }

    return (
        <Link to={to} style={enabledLinkStyle}>
            {children}
        </Link>
    );
};

const enabledLinkStyle = {
    color: '#007bff',
    textDecoration: 'underline',
    cursor: 'pointer',
};

const disabledLinkStyle = {
    color: 'gray',
    textDecoration: 'none',
    cursor: 'not-allowed',
    opacity: 0.6,
};

export default ProtectedLink