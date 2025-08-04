import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { AuthProvider } from '/src/Context/AuthContext/AuthContext.jsx';
import { NotificationProvider } from '/src/Context/NotificationContext/NotificationContext.jsx';
import { PreferencesProvider } from '/src/Context/Preferences/PreferencesProvider.jsx';
import { FavouritesProvider } from '/src/Context/FavouritesContext/FavouritesContext.jsx';
import { ThemeProvider } from '/src/Context/ThemeContext/ThemeContext.jsx';
import { RatingProvider } from '/src/Context/RatingContext/RatingContext.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <PreferencesProvider> {/* ✅ Now comes BEFORE ThemeProvider */}
                <ThemeProvider>
                    <NotificationProvider>
                        <FavouritesProvider>
                            <RatingProvider>
                                <App />
                            </RatingProvider>
                        </FavouritesProvider>
                    </NotificationProvider>
                </ThemeProvider>
            </PreferencesProvider>
        </AuthProvider>
    </StrictMode>
);
