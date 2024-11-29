import { usePreferences } from '/src/Context/PreferencesContext/PreferencesContext';
import './Preferences.css';

function Preferences() {
    const { preferences, updatePreferences } = usePreferences();

    const handleThemeChange = (e) => {
        updatePreferences({ theme: e.target.value });
    };

    const handleNotificationsChange = (e) => {
        updatePreferences({ notifications: e.target.checked });
    };

    return (
        <div className="preferences-container">
            <h2>Voorkeursinstellingen</h2>
            {/*<img alt="banner inbetween" src="/src/assets/Images/Banner.jpg" className="banner-inbetween"/>*/}
            <div className="preference-option">
                <label>Theme:</label>
                <select
                    value={preferences.theme}
                    onChange={handleThemeChange}
                >
                    {/*<div className="options-container">*/}
                    <option value="light">Licht</option>
                    <option value="dark">Donker</option>
                    {/*</div>*/}
                </select>
            </div>
            <div className="preference-option">
                <label>Meldingen:</label>
                <input
                    type="checkbox"
                    checked={preferences.notifications}
                    onChange={handleNotificationsChange}
                />
            </div>
        </div>
    );
}

export default Preferences;