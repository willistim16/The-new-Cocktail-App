import '/src/Styles/globals.css'
import {Route, Routes} from "react-router-dom";
import SearchPage from "./Pages/SearchPage.jsx";
import HomePage from "./Pages/HomePage.jsx";
import LogInRegisterPage from "./Pages/LogInRegisterPage.jsx";
import SingleCocktailPage from "./Pages/SingleCocktailPage.jsx";
import Favorieten from "./Pages/Favorieten.jsx";
import AllCocktailPage from "./Pages/AllCocktailPage.jsx";

function App() {

    return (
        <>
            <Routes>
                <Route path={"/"} element={<HomePage />} />
                <Route path={"/SearchPage"} element={<SearchPage />} />
                <Route path={"/LogInRegisterPage"} element={<LogInRegisterPage />} />
                <Route path={"/SingleCocktailPage/:id"} element={<SingleCocktailPage />} />
                <Route path={"/Favorieten"} element={<Favorieten />} />
                <Route path={"/AllCocktailPage"} element={<AllCocktailPage />} />
            </Routes>
        </>
    )
}

export default App
