import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const NotificationsContext = createContext();

// Custom hook to use the NotificationsContext
export const useNotifications = () => useContext(NotificationsContext);

// Provider component
export const NotificationsProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);

    // Load notifications from localStorage on component mount
    useEffect(() => {
        const storedNotifications = localStorage.getItem('notifications');
        if (storedNotifications) {
            setNotifications(JSON.parse(storedNotifications));
        }
    }, []);

    // Save notifications to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('notifications', JSON.stringify(notifications));
    }, [notifications]);

    const addNotification = (notification) => {
        setNotifications((prevNotifications) => [...prevNotifications, notification]);
    };

    const markAsRead = (index) => {
        setNotifications((prevNotifications) =>
            prevNotifications.map((notification, i) =>
                i === index ? { ...notification, read: true } : notification
            )
        );
    };

    return (
        <NotificationsContext.Provider value={{ notifications, addNotification, markAsRead }}>
            {children}
        </NotificationsContext.Provider>
    );
};