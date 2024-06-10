import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';

import NavigationLinks from './userNavigations.jsx';
const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const sidebarMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };



  const handleClickOutside = (event) => {
    if (sidebarMenuRef.current && !sidebarMenuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ isMenuOpen]);

  return (
    <header className="">
      <nav className=" dark:bg-black dark:bg-opacity-50 bg-white text-black bg-opacity-50 dark:text-white shadow-lg flex justify-between items-center px-4 py-2 backdrop-filter backdrop-blur-lg fixed top-0 left-0 w-full z-50">
        {/* Menu Bar */}
        <div className="flex">
          <button className="dark:text-white focus:outline-none" onClick={toggleMenu} ref={sidebarMenuRef}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Logo */}
        <div className="flex ml-4 lg:ml-20">
          <span className="lg:text-3xl font-bold dark:text-white">DOTA</span>
        </div>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-full  text-black dark:text-white"
        >
          {theme === 'light' ? (
            <i className="bi bi-moon-fill"></i>
          ) : (
            <i className="bi bi-sun-fill"></i>
          )}
        </button>
        {/* Navigation Links */}
        <div className="flex items-center ml-auto">
          <button className="dark:text-white focus:outline-none mx-2 lg:mx-4" onClick={toggleSearch}>
            <div className="flex items-center">
              <i className="bi bi-search mx-2"></i>
              <h1 className="hidden lg:block text-1xl">Search</h1>
            </div>
          </button>
          <button className="cursor-not-allowed dark:text-white dark:bg-zinc-900 bg-white py-2 px-4 text-center hover:bg-gray-300 dark:hover:bg-zinc-800 rounded-lg ">
            <div className="flex items-center">
              <i className="mx-2 bi bi-box-arrow-in-right text-1xl"></i>
              <h1 className="hidden lg:block text-1xl">Login</h1>
            </div>
          </button>
         <NavigationLinks />
        </div>
      </nav>

      {/* Search Bar */}
      <div className={`dark:text-white backdrop-filter backdrop-blur-lg bg-white dark:bg-black bg-opacity-50 shadow-lg p-4 fixed top-16 left-0 right-0 z-50 ${isSearchOpen ? '' : 'hidden'}`}>
        <input type="text" placeholder="Search..." className="px-4 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500 bg-black bg-opacity-50" />
      </div>

      {/* Sidebar Dropdown */}
      <div className={`dark:bg-black dark:bg-opacity-50 font-bold text-yellow dark:text-white shadow-lg flex justify-between px-4 py-5 backdrop-filter backdrop-blur-lg fixed top-0 left-0 h-screen z-50 ${isMenuOpen ? '' : 'hidden'}`} >
        {/* Close Button */}
        <button className="absolute top-2 right-2 text-white dark:text-gray-600 focus:outline-none" onClick={toggleMenu} >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ul className="py-4 pt-10 text-blue-300 dark:text-white">
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
