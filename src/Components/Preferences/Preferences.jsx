import { usePreferences } from '/src/Context/Preferences/usePreferences.js';
import './Preferences.css';
import { useTheme } from "../../Context/ThemeContext/ThemeContext.jsx";
import { useEffect, useState } from 'react';

function CustomDropdown({ options, selectedValue, onSelect }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (value) => {
        onSelect(value);
        setIsOpen(false);
    };

    return (
        <div className={`custom-dropdown ${isOpen ? "open" : ""}`}>
            <div
                className="custom-dropdown-selected"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                {selectedValue}
            </div>
            <div className="custom-dropdown-options">
                {options.map((option, index) => (
                    <div
                        key={index}
                        onClick={() => handleSelect(option.value)}
                    >
                        {option.label}
                    </div>
                ))}
            </div>
        </div>
    );
}

function Preferences() {
    const { preferences, updatePreferences } = usePreferences();
    const { setThemeFromPreferences } = useTheme();
    const [notificationMessage, setNotificationMessage] = useState("");
    const [showNotification, setShowNotification] = useState(false);

    const handleThemeChange = (newTheme) => {
        updatePreferences({ theme: newTheme });
        setThemeFromPreferences(newTheme);
        setNotificationMessage(`Het scherm thema is veranderd naar ${newTheme === "dark" ? "Donker" : "Licht"}.`);
        setShowNotification(true);
    };

    const handleNotificationsChange = (e) => {
        const isEnabled = e.target.checked;
        updatePreferences({ notifications: isEnabled });
        setNotificationMessage(isEnabled ? "Meldingen ingeschakeld!" : "Meldingen uitgeschakeld!");
        setShowNotification(true);
    };

    useEffect(() => {
        if (showNotification) {
            const timer = setTimeout(() => {
                setShowNotification(false);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [showNotification]);

    return (
        <>
            <div className="settings-page">
                <h2>Voorkeursinstellingen</h2>
            </div>
            <div className="preferences-container">
                <div className="preference-option">
                    <label>Theme:</label>
                    <CustomDropdown
                        options={[
                            { value: "licht", label: "Licht" },
                            { value: "donker", label: "Donker" },
                        ]}
                        selectedValue={preferences.theme === "dark" ? "Donker" : "Licht"}
                        onSelect={(value) => handleThemeChange(value === "donker" ? "dark" : "light")}
                    />
                </div>
                <div className="preference-option">
                    <label>Meldingen:</label>
                    <input
                        type="checkbox"
                        checked={preferences.notifications}
                        onChange={handleNotificationsChange}
                    />
                </div>
                <div className={`notification ${showNotification ? 'fade-in' : 'fade-out'}`}>
                    {notificationMessage}
                </div>
            </div>
        </>
    );
}

export default Preferences;