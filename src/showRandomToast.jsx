// src/showRandomToast.js
import { toast } from 'react-toastify';
import { messages } from './randomMessages';

export const showRandomToast = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];
    toast.info(randomMessage);
};

// Show a random toast message every 10 seconds
setInterval(() => {
    showRandomToast();
}, 10000); // 10000 milliseconds = 10 seconds
