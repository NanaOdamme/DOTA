import React, { useState } from 'react';
import Assets from '../db.json';





const AllAssets = () => {
  
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
    return (
        <section className=" bg-black p-2 all">

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
                <button type="button" onClick={() => handleFilter('all')} className="block px-4 py-2 text-white hover:bg-gray-800" role="menuitem">
  All
</button>
<button type="button" id='2' onClick={() => setFilterId(2)} className="block px-4 py-2 text-white hover:bg-gray-800" role="menuitem">
  NFTs
</button>
<button type="button" id='1' onClick={() => setFilterId(1)} className="block px-4 py-2 text-white hover:bg-gray-800" role="menuitem">
  Photography
</button>
<button type="button" id='0' onClick={() => setFilterId(0)} className="block px-4 py-2 text-white hover:bg-gray-800" role="menuitem">
  Digital Arts
</button>
<button type="button" id='3' onClick={() => setFilterId(3)} className="block px-4 py-2 text-white hover:bg-gray-800" role="menuitem">
  Logo
</button>
<button type="button" id='4' onClick={() => setFilterId(4)} className="block px-4 py-2 text-white hover:bg-gray-800" role="menuitem">
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

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:p-4">
            {searchedAssets.map(asset => (
                    <button key={asset.id} onClick={() => window.location.href = `/details/${asset.id}`} className="asset-link">

                        <div className="asset-card bg-zinc-600 text-white lg:p-5 p-2 rounded-lg">
                            <div className="flex mb-2 justify-between">
                                <div className="flex">
                                    <img src={asset['creator-image']} className="imge" alt="Creator" />
                                    <div className="info mx-2">
                                        <h1 className="text-gray-400">creator</h1>
                                        <p className="text-center">{asset.creator}</p>
                                    </div>
                                </div>
                                <div className="flex bg-black py-1 px-2 rounded-lg h-6" style={{ fontSize: '12px' }}>
                                    <i className="mx-1 bi bi-heart"></i>
                                    <p className="text-gray-200">{asset.bids}</p>
                                </div>
                            </div>
                            <div className="justify-center">
                                <img src={asset['asset-image']} alt="Asset" id={asset.id} className="rounded-lg w-full h-80  lg:h-96" />
                            </div>
                            <h1 className="font-bold text-2xl">{asset.title}</h1>
                            <div className="grid">
                                <p className="text-gray-400">current bids: {asset.bids} ETH</p>
                                <div className="flex justify-end"> {/* Position at right side */}
                            <div >
                                <p className="text-center bg-teal-500 w-20 mt-2 rounded-lg px-0.5">{asset.genre}</p>
                            </div>
                        </div>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
            <div className="mx-2 flex justify-between text-white">
                <h4 className="text-blue-400">Subscribe to our newsletter below to get updated on assets and bids</h4>
                <button  className="hover:bg-blue-400 px-4 border border-2 border-white rounded-full">Load More</button>
            </div>

        </section>
    );
}

export default AllAssets;

 


