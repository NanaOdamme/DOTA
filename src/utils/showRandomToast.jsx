// src/showRandomToast.js
import { toast } from 'react-toastify';
import { messages } from './randomMessages';

export const showRandomToast = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];
    toast.info(randomMessage);
    return randomMessage; // Return the message to be added to notifications
};

// The interval logic should be placed in a component where the NotificationsContext is available
