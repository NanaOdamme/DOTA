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
        const message = typeof notification === 'string' ? notification : notification.message;
        const newNotification = {
            message,
            timestamp: new Date().toISOString(), // Save timestamp as ISO string
            read: false
        };
        setNotifications((prevNotifications) => [...prevNotifications, newNotification]);
    };

    const markAsRead = (index) => {
        setNotifications((prevNotifications) =>
            prevNotifications.map((notification, i) =>
                i === index ? { ...notification, read: true } : notification
            )
        );
    };

    const deleteNotifications = (indexes) => {
        setNotifications((prevNotifications) =>
            prevNotifications.filter((_, i) => !indexes.includes(i))
        );
    };

    return (
        <NotificationsContext.Provider value={{ notifications, addNotification, markAsRead, deleteNotifications }}>
            {children}
        </NotificationsContext.Provider>
    );
};
