import React from 'react';
import { useNotifications } from './NotificationsContext';

const NotificationsPage = () => {
    const { notifications, markAsRead } = useNotifications();

    return (
        <div className="p-5">
            <h1 className="text-2xl mb-5 font-bold">Notifications</h1>
            <ul>
                {notifications.map((notification, index) => (
                    <li key={index} className={`p-3 mb-2 ${notification.read ? 'bg-gray-200' : 'bg-gray-100'}`}>
                                            <div className="flex justify-between items-center">
                            <span>{notification.message}</span>
                            {!notification.read && (
                                <button
                                    onClick={() => markAsRead(index)}
                                    className="text-blue-500 hover:text-blue-700"
                                >
                                    Mark as read
                                </button>
                            )}
                        </div>
                        <div className="text-gray-500 text-sm">
                            {new Date(notification.timestamp).toLocaleString()}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotificationsPage;
   
