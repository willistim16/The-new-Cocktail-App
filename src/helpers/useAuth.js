import { useContext } from 'react';
import AuthContext from '/src/Context/AuthContext/AuthContext.jsx';

const useAuth = () => useContext(AuthContext);

export default useAuth;