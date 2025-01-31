import { useState, useEffect } from "react";

const Layout = ({ children }) => {
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            {children}
            {showButton && (
                <button className="back-to-top" onClick={scrollToTop}>
                    ↑ Back to Top
                </button>
            )}
        </div>
    );
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

export default Layout;