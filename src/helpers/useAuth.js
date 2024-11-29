import { useContext } from 'react';
import AuthContext from '/src/Context/AuthContext/AuthContext.jsx'; // Adjust the path as needed

const useAuth = () => useContext(AuthContext);

export default useAuth;