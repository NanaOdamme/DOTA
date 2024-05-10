import React, { useState } from 'react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header>
      <nav className="bg-white shadow-lg flex justify-between items-center px-4 py-2">
        {/* Menu Bar */}
        <div className="flex items-center">
          <button className="text-gray-800 focus:outline-none" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      
        {/* Logo */}
        <div className="flex items-center justify-center">
          <span className="text-xl font-bold text-gray-800">DOTA ARTS</span>
        </div>
      
        {/* Search Bar */}
        <div className="flex items-center">
          <button className="text-gray-800 focus:outline-none mx-10" onClick={toggleSearch}>
            search
          </button>
          <button className="hover:text-orange-400 transition duration-300 text-red-500  px-6    font-bold">
            Sign In
          </button>
        </div>
      </nav>
      
      {/* Search Bar */}
      <div className={`bg-white shadow-lg p-4 fixed top-16 left-0 right-0 z-50 ${isSearchOpen ? '' : 'hidden'}`}>
        <input type="text" placeholder="Search..." className="px-4 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      
      {/* Sidebar Dropdown */}
      <div className={`bg-white shadow-lg h-screen w-64 fixed top-0 left-0 z-50 ${isMenuOpen ? '' : 'hidden'}`}>
        {/* Close Button */}
        <button className="absolute top-2 right-2 text-gray-600 focus:outline-none" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ul className="py-4 pt-10">
          <li className="px-4 py-2 hover:bg-orange-100 transition duration-300">
            <button onClick={() => window.location.href = "/home"}>Home</button>
          </li>
          <li className="px-4 py-2 hover:bg-orange-100 transition duration-300">
          <button onClick={() => window.location.href = "/about"}>About Us</button>
            </li>
          <li className="px-4 py-2 hover:bg-orange-100 transition duration-300">
          <button onClick={() => window.location.href = "/contact"}>Contact Us</button>
            </li>
          <li className="px-4 py-2 hover:bg-orange-100 transition duration-300">
          <button onClick={() => window.location.href = "/allAssets"}>All Assets</button>
            </li>
        
          {/* Add more menu items */}
        </ul>
      </div>
    </header>
  );
};

export default Header;
