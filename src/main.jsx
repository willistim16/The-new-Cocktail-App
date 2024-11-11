import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {FavouritesProvider} from "./FavouritesContext/FavouritesContext.jsx";
import {AuthProvider} from "./AuthContext/AuthContext.jsx";

createRoot(document.getElementById('root')).render(

  <StrictMode>
        <AuthProvider>
            <FavouritesProvider>
                <App />
            </FavouritesProvider>
        </AuthProvider>
  </StrictMode>,

)
