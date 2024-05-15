import React, { useState, useEffect } from 'react';
import Assets from './db.json';
import Creators from './creators.json'; // Import creators data
import Footer from './Footer.jsx';
import { Link } from 'react-router-dom';


const AllAssets = () => {
  const [creatorsData, setCreatorsData] = useState([]); // State to hold creators data

  const [showDropdown, setShowDropdown] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [filterId, setFilterId] = useState(null);

  const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
  };
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };
  const handleFilter = (id) => {
      setFilterId(id === 'all' ? null : id);
  };

  const filteredAssets = filterId
      ? Assets.assets.filter(asset => asset['genre-id'] === filterId)
      : Assets.assets;
    
      const searchedAssets = searchInput.trim().length > 0
      ? filteredAssets.filter(asset =>
          asset.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          asset.creator.toLowerCase().includes(searchInput.toLowerCase())
      )
      : filteredAssets;


      useEffect(() => {
        setCreatorsData(Creators.creators); // Set creators data from JSON file
      }, []);
    return (
        <section className="bg-black pt-20 p-2 all">

<section className="hero grid grid-cols-1 gap-2 p-4 text-center">
      <div className="flex justify-between mb-10">
        <h1 className="mx-2 text-white text-2xl">100+ items</h1>
        <div className="filter text-white">
          <div className="flex">
            <button
              id="filterBtn"
              onClick={toggleDropdown}
              className="bg-gray-500 text-white font-bold px-2 rounded mx-1"
            >
              <i className="text-2xl bi bi-filter"></i>
            </button>

            {/* Dropdown */}
            {showDropdown && (
              <div className="absolute mx-5 z-10 mt-12 bg-gray-400 rounded-md shadow-lg">
                <div className="" role="menu" aria-orientation="vertical" aria-labelledby="filterBtn">
                <button type="button" onClick={() => handleFilter('all')} className="block w-full px-4 py-2 text-white hover:bg-gray-800" role="menuitem">
  All
</button>
<button type="button" id='2' onClick={() => setFilterId(2)} className="block px-4 py-2 w-full text-white hover:bg-gray-800" role="menuitem">
  NFTs
</button>
<button type="button" id='1' onClick={() => setFilterId(1)} className="block px-4 py-2 w-full text-white hover:bg-gray-800" role="menuitem">
  Photography
</button>
<button type="button" id='0' onClick={() => setFilterId(0)} className="block px-4 py-2 w-full text-white hover:bg-gray-800" role="menuitem">
  Digital Arts
</button>
<button type="button" id='3' onClick={() => setFilterId(3)} className="block px-4 py-2 w-full text-white hover:bg-gray-800" role="menuitem">
  Logo
</button>
<button type="button" id='4' onClick={() => setFilterId(4)} className="block px-4 py-2 w-full text-white  hover:bg-gray-800" role="menuitem">
  3d Arts
</button>

                  {/* Other menu items */}
                </div>
              </div>
            )}

            {/* Search bar */}
            <div className="relative mx-auto max-w-md">
                <input
                    type="text"
                    value={searchInput}
                    onChange={handleSearch}
                    className="block w-full py-2 px-4 rounded-md bg-black border border-gray-300 focus:outline-none focus:border-blue-500"
                    placeholder="Search..."
                />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-white text-4xl mt-10">
        <span className="neon">Discover</span> Digital Assets, <br />
        Sell and Bid on Items
      </h1>
    </section>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:p-4">
            {searchedAssets.map((asset) => {
          const creator = creatorsData.find((creator) => creator['creator-id'] === asset['creator-id']); // Find the creator for the asset
          if (!creator) return null; //this handles cases where creator is not found
          return (
                    <Link to={`/details/${asset.id}`} key={asset.id} className="asset-link">
                      
                        <div className="asset-card h-64 w-full bg-zinc-900 hover:bg-zinc-700 hover:-translate-y-2 transition duration-500  text-white lg:p-5 p-2 rounded-lg">
                            <div className="grid grid-cols-1 lg:grid-cols-2 mb-2">
                                <div className="flex">
                                {creator.image && <img src={creator.image} alt={creator.name} className="rounded-full h-10 w-10 mr-1" />}
                                    <div className="info mx-2">
                                        <h1 className="text-gray-400 text-sm">creator</h1>
                                        <p>{creator ? `${creator.name}` : 'Creator not found'}</p> {/* Display creator's name */}
                                    </div>
                                </div>
                                <div className="flex  justify-end  lg:py-1 lg:px-2 rounded-lg h-6" style={{ fontSize: '12px' }}>
                                    <i className="mx-1 bi bi-heart"></i>
                                    <p className="text-gray-200">{asset.likes}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 ">
                            <div className="justify-center">
                                <img src={asset['asset-image']} alt="Asset" id={asset.id} className="rounded-lg  w-48 h-32 lg:w-54  lg:h-54 transition duration-500 transform hover:scale-95" />
                            </div>
                            <div className="grid grid-cols-1 ml-3">
                            <h1 className=" font-bold lg:text-1xl">{asset.title}</h1>
                            
                                <p className=" text-gray-400">current bids: {asset.bids} bids</p>
                                </div>
                                
                            
                       
                            </div>
                           
                        </div>
                        </Link>
                  );
                })}
            </div>
            <div className="mx-2 flex justify-between text-white">
                <h4 className="text-blue-400">Subscribe to our newsletter below to get updated on assets and bids</h4>
                <button  className="hover:bg-blue-400 px-4 border border-2 border-white rounded-full">Load More</button>
            </div>

            <Footer />
        </section>
    );
}

export default AllAssets;

 


