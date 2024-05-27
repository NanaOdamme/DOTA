import React, { useState, useEffect, useRef} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartPopup from './cart.jsx';

const NavigationLinks = () => {
    const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const accountMenuRef = useRef(null);
    const navigate = useNavigate();

    

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
      };
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
        <div className={`absolute right-0 mt-10 w-64 shadow-lg bg-white dark:bg-zinc-900 dark:text-white text-black rounded-lg shadow-lg ${isAccountMenuOpen ? '' : 'hidden'}`}>
        <ul>
                <li className="px-4 py-4 m-2 rounded-lg hover:bg-zinc-700">
                  <Link to="/profile"><i className="bi bi-person"></i> Profile</Link>
                </li>
                <li className="px-4 py-4 m-2 rounded-lg hover:bg-zinc-700">
                  <Link to="/watchlist"><i className="bi bi-eye"></i> WatchList</Link>
                </li>
                <hr className="border-zinc-600"/>
                <li className="px-4 py-4 m-2 rounded-lg hover:bg-zinc-700">
                  <Link to="/deals"><i className="bi bi-alarm"></i> Deals</Link>
                </li>
                <li className="px-4 py-4 m-2 rounded-lg hover:bg-zinc-700">
                  <Link to="/mybids"><i className="bi bi-person-check"></i> Bids</Link>
                </li>
                <li className="px-4 py-4 m-2 rounded-lg hover:bg-zinc-700">
                  <Link to="/dotapro"><i className="bi bi-person-check"></i> DotaPro</Link>
                </li>
                <hr className="border-zinc-600"/>
                <li className="px-4 py-4 m-2 rounded-lg hover:bg-zinc-700">
                  <Link to="/notification"><i className="bi bi-bell"></i> Notifications</Link>
                </li>
                <li className="px-4 py-4 m-2 rounded-lg hover:bg-zinc-700">
                  <Link to="/settings"><i className="bi bi-gear"></i> Settings</Link>
                </li>
                <hr className="border-zinc-600"/>
                <li className="px-4 py-2 m-2 rounded-lg hover:bg-zinc-700">
                  <Link to="/learn"><i className="bi bi-book"></i> Learn</Link>
                </li>
                <li className="px-4 py-2 m-2 rounded-lg hover:bg-zinc-700">
                  <Link to="/help"><i className="bi bi-question-circle"></i> Help</Link>
                </li>
                <li className="px-4 py-2 m-2 rounded-lg hover:bg-zinc-700">
                  <button onClick={handleLogout} className="w-full text-left"><i className="bi bi-box-arrow-left"></i> Logout</button>
                </li>
              </ul>

        </div>
      </div>
      <div className='hidden lg:block '>
        <div className="cart flex items-center mx-2 lg:mx-4 dark:bg-zinc-900 bg-white py-2 px-4 text-center hover:bg-gray-300 dark:hover:bg-zinc-800 rounded-lg cursor-pointer" onClick={toggleCart}>
          <i className="bi bi-cart3 text-2xl"></i>
        </div>
        {isCartOpen && <CartPopup setIsCartOpen={setIsCartOpen} />}
      </div>
    </div>
  );
};

export default NavigationLinks;
