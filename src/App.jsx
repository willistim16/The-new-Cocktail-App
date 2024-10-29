import '/src/Styles/globals.css'
import {Route, Routes} from "react-router-dom";
import ZoekenFilteren from "./Pages/Zoeken&Filteren.jsx";
import HomePage from "./Pages/HomePage.jsx";
import LogInRegisterPage from "./Pages/LogInRegisterPage.jsx";
import SingleCocktailPage from "./Pages/SingleCocktailPage.jsx";
import Favorieten from "./Pages/Favorieten.jsx";

function App() {

    return (
        <>
            <Routes>
                <Route path={"/"} element={<HomePage />} />
                <Route path={"/ZoekenFilteren"} element={<ZoekenFilteren />} />
                <Route path={"/LogInRegisterPage"} element={<LogInRegisterPage />} />
                <Route path={"/SingleCocktailPage"} element={<SingleCocktailPage />} />
                <Route path={"/Favorieten"} element={<Favorieten />} />
            </Routes>
        </>
    )
}

export default App
