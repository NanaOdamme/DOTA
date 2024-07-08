import React from 'react';

const Modal = ({ isOpen, closeModal, content }) => {
    return (
        <div className={` fixed inset-0 flex items-center justify-center z-50 ${isOpen ? 'visible' : 'invisible'}`}>
            <div className=" absolute inset-0 bg-gray-900 opacity-20"></div>
            <div className="m-12 bg-white dark:bg-zinc-600 dark:text-white p-6 rounded-lg shadow-lg z-50">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Notification Details</h2>
                    <button className="text-gray-500 hover:text-gray-700" onClick={closeModal}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-red-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Modal;
