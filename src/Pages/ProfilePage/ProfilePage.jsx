import useAuth from '/src/helpers/useAuth.js';
import Header from "../../Components/Header/Header.jsx";
import '/src/Pages/ProfilePage/ProfilePage.css'
import Footer from "../../Components/Footer/Footer.jsx";

function ProfilePage() {
    const { user, logout } = useAuth();

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <>
        <div>
            <Header/>
        </div>
        <main>
            <div className="profilePageh1">
                <h1>Profile Page</h1>
            </div>
            <div className="userDataProfilePage">
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
            </div>
            <div className="logoutButtonProfilePage">
                <button onClick={logout}>Logout</button>
            </div>
        </main>
            <div>
                <Footer/>
            </div>
        </>
    );
};

export default ProfilePage;