import React, { useState } from 'react';
import { useNotifications } from '../Context/NotificationsContext';
import Modal from '../utils/notificationpopup.jsx'; 

const NotificationsPage = () => {
    const { notifications, markAsRead, deleteNotifications } = useNotifications();
    const [selectedNotifications, setSelectedNotifications] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [selectAll, setSelectAll] = useState(false);

    const handleCheckboxChange = (index) => {
        setSelectedNotifications((prevState) =>
            prevState.includes(index)
                ? prevState.filter((item) => item !== index)
                : [...prevState, index]
        );
    };

    const handleSelectAll = () => {
        if (selectAll) {
            setSelectedNotifications([]);
        } else {
            setSelectedNotifications(notifications.map((_, index) => index));
        }
        setSelectAll(!selectAll);
    };

    const handleDelete = () => {
        deleteNotifications(selectedNotifications);
        setSelectedNotifications([]);
        setSelectAll(false);
    };

    const openModal = (content) => {
        setModalContent(content);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <section className="h-screen flex items-center justify-center pt-14 dark:bg-zinc-400 lg:px-20">
            <div className="lg:m-20 m-5 bg-gray-300 dark:bg-zinc-700 p-5 rounded-lg shadow-lg">
                <h1 className="text-2xl mb-5 font-bold dark:text-white">Notifications</h1>
                <div className="flex items-center mb-3">
                    <input
                        type="checkbox"
                        checked={selectAll}
                        onChange={handleSelectAll}
                        className="mr-2"
                    />
                    <span>Select All</span>
                </div>
                <ul className="overflow-y-auto lg:max-h-96 md:max-h-96">
                    {notifications.map((notification, index) => (
                        <li
                            key={index}
                            className={`rounded-lg shadow-lg p-3 mb-2 ${
                                notification.read
                                    ? 'dark:text-white dark:bg-zinc-800 bg-gray-200'
                                    : 'dark:text-gray-400 dark:bg-zinc-900 bg-gray-100'
                            }`}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={selectedNotifications.includes(index)}
                                        onChange={() => handleCheckboxChange(index)}
                                        className="mr-2"
                                    />
                                    <span onClick={() => openModal(notification.message)}>
                                        {notification.message}
                                    </span>
                                </div>
                                {!notification.read && (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            markAsRead(index);
                                        }}
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
                {selectedNotifications.length > 0 && (
                    <button
                        onClick={handleDelete}
                        className="mt-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                    >
                        Delete Selected
                    </button>
                )}
                <Modal isOpen={modalOpen} closeModal={closeModal} content={modalContent} />
            </div>
        </section>
    );
};

export default NotificationsPage;
