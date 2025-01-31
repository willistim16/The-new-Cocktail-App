import { createContext, useState, useContext, useEffect } from "react";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notificationMessage, setNotificationMessage] = useState("");
    const [showNotification, setShowNotification] = useState(false);

    const triggerNotification = (message) => {
        setNotificationMessage(message);
        setShowNotification(true);
    };

    useEffect(() => {
        if (showNotification) {
            const timer = setTimeout(() => {
                setShowNotification(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [showNotification]);

    return (
        <NotificationContext.Provider value={{ triggerNotification }}>
            {children}
            {showNotification && (
                <div className={`notification fade-in`}>
                    {notificationMessage}
                </div>
            )}
        </NotificationContext.Provider>
    );
};

export const useNotification = () => useContext(NotificationContext);