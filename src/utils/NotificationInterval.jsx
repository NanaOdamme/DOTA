import React, { useEffect } from 'react';
import { showRandomToast } from './showRandomToast.jsx';
import { useNotifications } from '../Context/NotificationsContext.jsx';

const NotificationInterval = () => {
    const { addNotification } = useNotifications();

    useEffect(() => {
        const interval = setInterval(() => {
            const notificationMessage = showRandomToast();
            if (notificationMessage) {
                addNotification(notificationMessage);
                
            }
        }, 100000); // 30000 milliseconds = 30 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [addNotification]);

    return null; // This component doesn't need to render anything
};

export default NotificationInterval;
