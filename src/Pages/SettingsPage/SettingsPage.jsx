import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Preferences from '../../Components/Preferences/Preferences';
import './SettingsPage.css';

function SettingsPage() {
    return (
        <>
            <div className="header-settings-page">
                <Header
                    title="Instellingen"
                />
            </div>
            <main className="settings-page">
                <Preferences />
            </main>
            <Footer />
        </>
    );
}

export default SettingsPage;