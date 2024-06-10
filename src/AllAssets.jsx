// src/AllAssets.jsx
import React, { useState, useEffect } from 'react';
import Assets from './db.json';
import Creators from './creators.json';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useBookmarks } from './BookmarkContext';
import { useCart } from './CartContext';

const AllAssets = () => {
  const [creatorsData, setCreatorsData] = useState([]);
  const { addBookmark } = useBookmarks();
  const { cart, addToCart } = useCart(); // Add this line
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [filterId, setFilterId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; // Number of assets per page
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCreatorsData(Creators.creators);
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const handleFilter = (id) => {
    setFilterId(id === 'all' ? null : id);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredAssets = filterId
    ? Assets.assets.filter((asset) => asset['genre-id'] === filterId)
    : Assets.assets;

  const searchedAssets = searchInput.trim().length > 0
    ? filteredAssets.filter((asset) =>
        asset.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        asset.creator.toLowerCase().includes(searchInput.toLowerCase())
      )
    : filteredAssets;

  const handleAddBookmark = (asset) => {
    addBookmark(asset);
  };

  const handleAddToCart = item => {
    
    const itemInCart = cart.find(cartItem => cartItem.id === item.id);
  if (itemInCart) {
    setAlert(`Asset is already in your cart!`);
    setTimeout(() => setAlert(null), 3000); // Hide alert after 3 seconds
  } else {
      addToCart(item);
      setAlert(`Asset has been added to your cart!`);
      setTimeout(() => setAlert(null), 3000); // Hide alert after 3 seconds
    }
  };

  const totalPages = Math.ceil(searchedAssets.length / pageSize);
  const paginatedAssets = searchedAssets.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <section className="dark:bg-black bg-gray-100 pt-10 all">
      
      <section className="hero grid grid-cols-1 gap-2 p-4 text-center">
        <div className="flex justify-between mb-10 mt-10">
          <h1 data-testid="hero-text" className="mx-2 dark:text-white text-2xl">
            100+ items
          </h1>
          <div className="filter dark:text-white">
            <div className="flex">
              <button
                data-testid="filter-button"
                id="filterBtn"
                onClick={toggleDropdown}
                className="dark:bg-gray-500 bg-white text-black dark:text-white font-bold px-2 rounded mx-1"
              >
                <i className="text-2xl bi bi-filter"></i>
              </button>

              {/* Dropdown */}
              {showDropdown && (
                <div className="absolute mx-5 z-10 mt-12 dark:bg-gray-400 bg-white text-black dark:text-white rounded-md shadow-lg">
                  <div
                    className=""
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="filterBtn"
                  >
                    <button
                      type="button"
                      onClick={() => handleFilter('all')}
                      className="block w-full px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-800"
                      role="menuitem"
                    >
                      All
                    </button>
                    <button
                      type="button"
                      id="2"
                      onClick={() => handleFilter(2)}
                      className="block px-4 py-2 w-full hover:bg-gray-200 dark:hover:bg-gray-800"
                      role="menuitem"
                    >
                      NFTs
                    </button>
                    <button
                      type="button"
                      id="1"
                      onClick={() => handleFilter(1)}
                      className="block px-4 py-2 w-full  hover:bg-gray-200 dark:hover:bg-gray-800"
                      role="menuitem"
                    >
                      Photography
                    </button>
                    <button
                      type="button"
                      id="0"
                      onClick={() => handleFilter(0)}
                      className="block px-4 py-2 w-full  hover:bg-gray-200 dark:hover:bg-gray-800"
                      role="menuitem"
                    >
                      Digital Arts
                    </button>
                    <button
                      type="button"
                      id="3"
                      onClick={() => handleFilter(3)}
                      className="block px-4 py-2 w-full  hover:bg-gray-200 dark:hover:bg-gray-800"
                      role="menuitem"
                    >
                      Logo
                    </button>
                    <button
                      type="button"
                      id="4"
                      onClick={() => handleFilter(4)}
                      className="block px-4 py-2 w-full  hover:bg-gray-200 dark:hover:bg-gray-800"
                      role="menuitem"
                    >
                      3d Arts
                    </button>
                  </div>
                </div>
              )}

              {/* Search bar */}
              <div className="relative mx-auto max-w-md">
                <input
                  type="text"
                  value={searchInput}
                  onChange={handleSearch}
                  className="text-black dark:text-white block w-full py-2 px-4 rounded-md dark:bg-black border border-gray-300 focus:outline-none focus:border-blue-500"
                  placeholder="Search..."
                />
              </div>
            </div>
          </div>
        </div>
        <h1
          data-testid="hero-text2"
          className="dark:text-white text-4xl mt-10"
        >
          <span className="neon">Discover</span> Digital Assets, <br />
          Sell and Bid on Items
        </h1>
        
      </section>
      {alert && (
        <div className="mt-20 fixed z-50 w-full transform  bg-green-500 text-white py-2 px-4  shadow-md">
          {alert}
        </div>
          )}
      <div className="p-6 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:p-4">
        {paginatedAssets.map((asset) => {
          const creator = creatorsData.find(
            (creator) => creator['creator-id'] === asset['creator-id']
          );
          if (!creator) return null;
          return (
            <div
              key={asset.id}
              className="asset-link asset-card bg-white h-64 w-full dark:bg-zinc-900 border text-black border-zinc-900 hover:bg-yellow-200 dark:hover:bg-zinc-700 hover:-translate-y-2 transition duration-500 text-white lg:p-5 p-2 rounded-lg"
            >
              <Link to={`/details/${asset.id}`}>
                <div className="">
                  <div className="p-1 grid grid-cols-1 lg:grid-cols-2 mb-2">
                    <div className="flex w-96">
                      {creator.image && (
                        <img
                          src={creator.image}
                          alt={creator.name}
                          className="rounded-full h-10 w-10 mr-1 border border-2 border-zinc-900"
                        />
                      )}
                      <div className="mx-2">
                        <h1 className="dark:text-gray-400 text-black text-sm">
                          creator
                        </h1>
                        <p className="dark:text-white text-black">
                          {creator ? `${creator.name}` : 'Creator not found'}
                        </p>
                        </div>
                    </div>
                    <div className="flex justify-end lg:py-1 lg:px-2 rounded-lg h-6" style={{ fontSize: '12px' }}>
                      <i className="dark:text-white text-black mx-1 bi bi-heart"></i>
                      <p className="text-black dark:text-gray-200">{asset.likes}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="justify-center">
                      <img
                        src={asset['asset-image']}
                        alt="Asset"
                        id={asset.id}
                        className="rounded-lg w-48 h-32 lg:w-54 lg:h-54 transition duration-500 transform hover:scale-95 border border-2 border-zinc-900"
                      />
                    </div>
                    <div className="grid grid-cols-1 ml-3">
                      <h1 className="dark:text-white text-black font-bold lg:text-1xl">{asset.title}</h1>
                      <p className="text-black dark:text-gray-400">current bids: {asset.bids} bids</p>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="flex justify-end">
                <button data-testid='addtocart' onClick={() => handleAddToCart(asset)} className="font-bold px-2 rounded mx-5">
                  <i className="text-purple-500 text-2xl bi bi-cart-plus-fill"></i>
                </button>
                <button data-testid='addtobookmark' onClick={() => handleAddBookmark(asset)} className="font-bold px-2 rounded mx-1">
                  <i className="text-green-500 text-2xl bi bi-bookmark-plus-fill hover:text-green-300"></i>
                </button>
              </div>
              
            </div>
            
          );
        })}
      </div>
      
      
      <div className="px-6 flex flex-wrap justify-center mt-5 mb-10">
        <button
          className="mb-2 mx-1 px-2 py-2 bg-gray-300 text-black rounded"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`mb-2 mx-1 px-1 py-2 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="mb-2 mx-1 px-2 py-2 bg-gray-300 text-black rounded"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      <Footer />
    </section>
  );
};

export default AllAssets;

