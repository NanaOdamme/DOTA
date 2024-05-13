import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom'; 
import Assets from './db.json'

const AuctionPage = () => {
  const auctionAssets = Assets.assets.filter((asset) => asset['auction-status'] === 'True');
  
   

  return (
    <div className="container bg-black p-2 pt-20">
      <h1 className="text-2xl text-white font-bold mb-4">Dota Auction House</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {auctionAssets.map((asset, index) => (
          <Link key={index} to={`/auction/${asset.id}`} className="card bg-gray-800 text-white rounded-lg shadow-md p-4">
            <img src={asset['asset-image']} alt={asset.title} className="w-full h-48 object-cover mb-2" />
            <h2 className="text-lg font-bold mb-2">{asset.title}</h2>
            <p className="text-sm mb-2">Current Bid: {asset.bids}</p>
            <p className="text-sm mb-2">Time Left: {asset.hours}:{asset.minutes}:{asset.seconds}</p>
           
          </Link>
        ))}
      </div>
      <Link to="/home" className="block mt-4 text-cyan-500 font-bold mx-2 hover:underline">Back to Home</Link>
    </div>
  );
};

export default AuctionPage;
