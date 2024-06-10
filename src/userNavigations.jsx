import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';  // Importing useCart hook

const NavigationLinks = () => {
    const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
    const accountMenuRef = useRef(null);
    const navigate = useNavigate();
    const { cart } = useCart();  // Using useCart to get cart data
    
    const toggleAccountMenu = () => {
        setIsAccountMenuOpen(!isAccountMenuOpen);
    };
    
    const handleClickOutside = (event) => {
        if (accountMenuRef.current && !accountMenuRef.current.contains(event.target)) {
            setIsAccountMenuOpen(false);
        }
    };
    
    const handleLogout = () => {
        navigate('/');
    };
    
    useEffect(() => {
        if (isAccountMenuOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }
    
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isAccountMenuOpen]);

    return (
        <div className="flex items-center ml-auto">
            <div
                className="account flex mx-2 lg:mx-4 bg-white dark:bg-zinc-900 py-2 px-4 text-left hover:bg-gray-200 dark:hover:bg-zinc-800 rounded-lg cursor-pointer relative"
                onClick={toggleAccountMenu}
                ref={accountMenuRef}
            >
                <i className="bi bi-person-circle text-2xl"></i>
                {/* Account Dropdown */}
                <div className={`absolute right-0 mt-10 w-64 shadow-lg bg-white dark:bg-zinc-900 dark:text-white text-black rounded-lg ${isAccountMenuOpen ? '' : 'hidden'}`}>
                    <ul style={{height: 600}} className='  overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-blue-400 scrollbar-track-blue-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-zinc-700'>
                        <Link to="/profile">
                            <li className="px-4 py-4 m-2 rounded-lg hover:bg-zinc-700">
                                <i className="bi bi-person"></i> Profile
                            </li>
                        </Link>
                        <Link to="/cart">
                            <li className="px-4 py-4 m-2 rounded-lg hover:bg-zinc-700 flex items-center">
                                <i className="bi bi-cart3 relative">
                                    {cart.length > 0 && (
                                        <span className="absolute top-0 right-0 inline-block w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full flex items-center justify-center">
                                            {cart.length}
                                        </span>
                                    )}
                                </i> Cart
                            </li>
                        </Link>
                        <Link to="/watchlist">
                            <li className="px-4 py-4 m-2 rounded-lg hover:bg-zinc-700">
                                <i className="bi bi-eye"></i> Bookmarks
                            </li>
                        </Link>
                        <hr className="border-zinc-600" />
                        <Link to="/deals">
                            <li className="px-4 py-4 m-2 rounded-lg hover:bg-zinc-700">
                                <i className="bi bi-alarm"></i> Deals
                            </li>
                        </Link>
                        <Link to="/mybids">
                            <li className="px-4 py-4 m-2 rounded-lg hover:bg-zinc-700">
                                <i className="bi bi-person-check"></i> Bids
                            </li>
                        </Link>
                        <Link to="/pro">
                            <li className="px-4 py-4 m-2 rounded-lg hover:bg-zinc-700">
                                <i className="bi bi-person-check"></i> DotaPro
                            </li>
                        </Link>
                        <hr className="border-zinc-600" />
                        
                            <li className="px-4 py-4 m-2 rounded-lg hover:bg-zinc-700">
                                <i className="bi bi-bell"></i> Notifications
                            </li>
                       
                        <hr className="border-zinc-600" />
                        <Link to="/learn">
                            <li className="px-4 py-2 m-2 rounded-lg hover:bg-zinc-700">
                                <i className="bi bi-book"></i> Learn
                            </li>
                        </Link>
                        <Link to="/help">
                            <li className="px-4 py-2 m-2 rounded-lg hover:bg-zinc-700">
                                <i className="bi bi-question-circle"></i> Help
                            </li>
                        </Link>
                        <li className="px-4 py-2 m-2 rounded-lg hover:bg-zinc-700">
                            <button onClick={handleLogout} className="w-full text-left">
                                <i className="bi bi-box-arrow-left"></i> Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavigationLinks;
