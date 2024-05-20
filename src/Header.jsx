import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CartPopup from './cart.jsx';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const accountMenuRef = useRef(null);
  const sidebarMenuRef = useRef(null);


  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleAccountMenu = () => {
    setIsAccountMenuOpen(!isAccountMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (accountMenuRef.current && !accountMenuRef.current.contains(event.target)) {
      setIsAccountMenuOpen(false);
    }
    if (sidebarMenuRef.current && !sidebarMenuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isAccountMenuOpen || isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isAccountMenuOpen, isMenuOpen]);

  return (
    <header className="">
      <nav className=" bg-black bg-opacity-50 text-white shadow-lg flex justify-between items-center px-4 py-2 backdrop-filter backdrop-blur-lg fixed top-0 left-0 w-full z-50">
        {/* Menu Bar */}
        <div className="flex">
          <button className="text-white focus:outline-none" onClick={toggleMenu} ref={sidebarMenuRef}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Logo */}
        <div className="flex ml-4 lg:ml-20">
          <span className="lg:text-3xl font-bold text-white">DOTA</span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center ml-auto">
          <button className="text-white focus:outline-none mx-2 lg:mx-4" onClick={toggleSearch}>
            <div className="flex items-center">
              <i className="bi bi-search mx-2"></i>
              <h1 className="hidden lg:block text-1xl">Search</h1>
            </div>
          </button>
          <Link to='/login' className="text-white bg-zinc-900 py-2 px-4 text-center hover:bg-zinc-800 rounded-lg cursor-pointer">
            <div className="flex items-center">
              <i className="mx-2 bi bi-box-arrow-in-right text-1xl"></i>
              <h1 className="hidden lg:block text-1xl">Login</h1>
            </div>
          </Link>
          <div
            className="account flex mx-2 lg:mx-4 bg-zinc-900 py-2 px-4 text-left hover:bg-zinc-800 rounded-lg cursor-pointer relative"
            onClick={toggleAccountMenu}
            ref={accountMenuRef}
          >
            <i className="bi bi-person-circle text-2xl"></i>
            {/* Account Dropdown */}
            <div className={`absolute right-0 mt-10 w-64 shadow-lg bg-zinc-900 text-white rounded-lg shadow-lg ${isAccountMenuOpen ? '' : 'hidden'}`}>
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
                  <Link to="/"><i className="bi bi-box-arrow-left"></i> Logout</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="cart flex items-center mx-2 lg:mx-4 bg-zinc-900 py-2 px-4 text-center hover:bg-zinc-800 rounded-lg cursor-pointer" onClick={toggleCart}>
              <i className="bi bi-cart3 text-2xl"></i>
            </div>
            {isCartOpen && <CartPopup setIsCartOpen={setIsCartOpen} />}
          </div>
        </div>
      </nav>

      {/* Search Bar */}
      <div className={`text-white backdrop-filter backdrop-blur-lg bg-black bg-opacity-50 shadow-lg p-4 fixed top-16 left-0 right-0 z-50 ${isSearchOpen ? '' : 'hidden'}`}>
        <input type="text" placeholder="Search..." className="px-4 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500 bg-black bg-opacity-50" />
      </div>

      {/* Sidebar Dropdown */}
      <div className={`bg-black bg-opacity-50 text-white shadow-lg flex justify-between px-4 py-5 backdrop-filter backdrop-blur-lg fixed top-0 left-0 h-screen z-50 ${isMenuOpen ? '' : 'hidden'}`} >
        {/* Close Button */}
        <button className="absolute top-2 right-2 text-gray-600 focus:outline-none" onClick={toggleMenu} >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ul className="py-4 pt-10">
          <li className="px-4 py-2 hover:bg-orange-100 transition duration-300">
            <Link to="/home">Home</Link>
          </li>
          <li className="px-4 py-2 hover:bg-orange-100 transition duration-300">
            <Link to="/allAssets">All Assets</Link>
          </li>
          <li className="px-4 py-2 hover:bg-orange-100 transition duration-300">
            <Link to="/creators">Dota Creators</Link>
          </li>
          <li className="px-4 py-2 hover:bg-orange-100 transition duration-300">
            <Link to="/auctions">Auction House</Link>
          </li>
          <li className="px-4 py-2 hover:bg-orange-100 transition duration-300">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 py-2 hover:bg-orange-100 transition duration-300">
            <Link to="/contact">Contact Us</Link>
          </li>
          {/* Add more menu items */}
        </ul>
      </div>
    </header>
  );
};

export default Header;
