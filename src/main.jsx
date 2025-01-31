import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {FavouritesProvider} from "./Context/FavouritesContext/FavouritesContext.jsx";
import {AuthProvider} from "./Context/AuthContext/AuthContext.jsx";
import {ThemeProvider} from "./Context/ThemeContext/ThemeContext.jsx";
import {RatingProvider} from "./Context/RatingContext/RatingContext.jsx";
import {PreferencesProvider} from "./Context/PreferencesContext/PreferencesContext.jsx";
import {NotificationProvider} from "./Context/NotificationContext/NotificationContext.jsx";


createRoot(document.getElementById('root')).render(

  <StrictMode>
        <AuthProvider>
            <NotificationProvider>
                <PreferencesProvider>
                    <FavouritesProvider>
                        <ThemeProvider>
                            <RatingProvider>
                                <App />
                            </RatingProvider>
                        </ThemeProvider>
                    </FavouritesProvider>
                </PreferencesProvider>
            </NotificationProvider>
        </AuthProvider>
  </StrictMode>,

)
