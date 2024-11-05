import '/src/Styles/globals.css'
import {Route, Routes} from "react-router-dom";
import SearchPage from "./Pages/SearchPage/SearchPage.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import LogInRegisterPage from "./Pages/LogInRegisterPage/LogInRegisterPage.jsx";
import AllCocktailPage from "./Pages/AllCocktailPage/AllCocktailPage.jsx";
import MijnFavorieten from "./Pages/MijnFavorieten/MijnFavorieten.jsx";
import AboutPage from "./Pages/AboutPage/AboutPage.jsx";
import CocktailDetailsPage from "./Pages/CocktailDetailsPage/CocktailDetailsPage.jsx";

function App() {

    return (
        <>
            <Routes>
                <Route path={"/"} element={<HomePage />} />
                <Route path={"/SearchPage"} element={<SearchPage />} />
                <Route path={"/LogInRegisterPage"} element={<LogInRegisterPage />} />
                <Route path={"/CocktailDetailsPage/:id"} element={<CocktailDetailsPage />} />
                <Route path={"/MijnFavorieten"} element={<MijnFavorieten />} />
                <Route path={"/AllCocktailPage"} element={<AllCocktailPage />} />
                <Route path={"/AboutPage"} element={<AboutPage />} />
            </Routes>
        </>
    )
}

export default App
