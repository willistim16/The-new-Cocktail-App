import { useState, useEffect } from "react";
import PreferencesContext from "./PreferencesContext";

export function PreferencesProvider({ children }) {
    const [preferences, setPreferences] = useState(() => {
        try {
            const savedPreferences = localStorage.getItem("preferences");
            return savedPreferences
                ? JSON.parse(savedPreferences)
                : { theme: "light", notifications: true };
        } catch (error) {
            console.error("Failed to parse preferences from localStorage:", error);
            return { theme: "light", notifications: true };
        }
    });

    useEffect(() => {
        if (preferences) {
            try {
                localStorage.setItem("preferences", JSON.stringify(preferences));
            } catch (error) {
                console.error("Failed to save preferences to localStorage:", error);
            }
        }
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
