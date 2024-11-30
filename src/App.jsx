import '/src/Styles/globals.css';
import '/src/Styles/responsive.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import SearchPage from "./Pages/SearchPage/SearchPage.jsx";
import MijnFavorieten from "./Pages/MijnFavorieten/MijnFavorieten.jsx";
import HistoryPage from "./Pages/HistoryPage/HistoryPage.jsx";
import CocktailDetailsPage from "./Pages/CocktailDetailsPage/CocktailDetailsPage.jsx";
import { checkHealth } from "../server/utils/healthCheck.jsx";
import ProfilePage from "./Pages/ProfilePage/ProfilePage.jsx";
import NotFoundPage from "./Pages/NotFoundPage/NotFound.jsx";
import ProtectedRoute from "./Routes/ProtectedRoute.jsx";
import useAuth from '/src/helpers/useAuth.js'
import {useEffect} from "react";
import LogInRegisterPage from "./Pages/LogIn&RegisterPage/LogInRegisterPage.jsx";
import {useTheme} from "./Context/ThemeContext/ThemeContext.jsx";
import SettingsPage from "./Pages/SettingsPage/SettingsPage.jsx";
import PasswordReset from "./Pages/PasswordResetPage/PasswordResetPage.jsx";

const AppContent = () => {
    const { theme } = useTheme();

    return (
        <div style={{ backgroundColor: theme.background, color: theme.text, minHeight: "100vh" }}>

            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/AboutPage" element={<HistoryPage />} />
                    <Route path="/LogInRegisterPage" element={<LogInRegisterPage />} />

                    <Route element={<ProtectedRoute />}>
                        <Route path="/SearchPage" element={<SearchPage />} />
                        <Route path="/CocktailDetailsPage/:id" element={<CocktailDetailsPage />} />
                        <Route path="/MijnFavorieten" element={<MijnFavorieten />} />
                        <Route path="/ProfilePage" element={<ProfilePage />} />
                        <Route path="/instellingen" element={<SettingsPage />} />
                        <Route path="/passwordResetPage" element={<PasswordReset />} />
                    </Route>

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Router>
        </div>
    );
};

function App() {
    const { isLoading } = useAuth();

    useEffect(() => {
        checkHealth();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <AppContent />;
}

export default App;
