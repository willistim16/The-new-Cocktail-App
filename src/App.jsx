import '/src/Styles/globals.css';
import '/src/Styles/responsive.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import SearchPage from "./Pages/SearchPage/SearchPage.jsx";
import MijnFavorieten from "./Pages/MijnFavorieten/MijnFavorieten.jsx";
import AboutPage from "./Pages/AboutPage/AboutPage.jsx";
import CocktailDetailsPage from "./Pages/CocktailDetailsPage/CocktailDetailsPage.jsx";
import { checkHealth } from "./utils/healthCheck.jsx";
import ProfilePage from "./Pages/ProfilePage/ProfilePage.jsx";
import NotFoundPage from "./Pages/NotFoundPage/NotFound.jsx";
import ProtectedRoute from "./Routes/ProtectedRoute.jsx";
import useAuth from '/src/helpers/useAuth.js'
import {useEffect} from "react";
import LogInRegisterPage from "./Pages/LogIn&RegisterPage/LogInRegisterPage.jsx"; // Remove duplicate import

function App() {
    const { isLoading } = useAuth();
    // const { isAuthenticated } = useAuth();

    useEffect(() => {
        checkHealth();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>; // Show loading while AuthProvider is determining auth status
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/AboutPage" element={<AboutPage />} />
                <Route path="/LogInRegisterPage" element={<LogInRegisterPage />} />

                <Route element={<ProtectedRoute />}>
                    <Route path="/SearchPage" element={<SearchPage />} />
                    <Route path="/CocktailDetailsPage/:id" element={<CocktailDetailsPage />} />
                    <Route path="/MijnFavorieten" element={<MijnFavorieten />} />
                    <Route path="/ProfilePage" element={<ProfilePage />} />
                </Route>

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

export default App;
