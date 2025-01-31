import { Link } from 'react-router-dom';
import useAuth from '/src/helpers/useAuth.js'

const ProtectedLink = ({ to, children }) => {
    const { jwt } = useAuth();

    if (!jwt) {
        return (
            <span style={disabledLinkStyle} title="Login required to access">
                {children}
            </span>
        );
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
    opacity: 1,
};

export default ProtectedLink