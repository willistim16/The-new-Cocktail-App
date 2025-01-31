import { createContext, useContext, useState, useEffect } from 'react';

const PreferencesContext = createContext();

export function PreferencesProvider({ children }) {
    const [preferences, setPreferences] = useState(() => {
        const savedPreferences = localStorage.getItem('preferences');
        return savedPreferences
            ? JSON.parse(savedPreferences)
            : { theme: 'light', notifications: true };
    });

    useEffect(() => {
        localStorage.setItem('preferences', JSON.stringify(preferences));
    }, [preferences]);

    const updatePreferences = (newPreferences) => {
        setPreferences((prev) => ({ ...prev, ...newPreferences }));
    };

    return (
        <PreferencesContext.Provider value={{ preferences, updatePreferences }}>
            {children}
        </PreferencesContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const usePreferences = () => useContext(PreferencesContext);