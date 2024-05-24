import React from 'react';
import { Link } from 'react-router-dom'; 
import Assets from './db.json'

const AuctionPage = () => {
  const auctionAssets = Assets.assets.filter((asset) => asset['auction-status'] === 'True');
  
   

  return (
    <div className=" dark:bg-black p-2 pt-20">
      <h1 className="text-2xl dark:text-white font-bold mb-4">Dota Auction House</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {auctionAssets.map((asset, index) => (
          <Link key={index} to={`/auction/${asset.id}`} className="card  w-full dark:bg-zinc-900 bg-purple-300 hover:bg-purple-600 dark:hover:bg-zinc-700 hover:-translate-y-2 transition duration-500  darktext-white lg:p-5 p-2 rounded-lg border border-purple-600 dark:border-zinc-900 border-2 dark:text-white">
            <img src={asset['asset-image']} alt={asset.title} className="w-full h-48 rounded object-cover mb-2 border border-2 border-zinc-900" />
            <h2 className="text-lg font-bold mb-2">{asset.title}</h2>
            <div className="flex justify-between">
            <p className="text-sm mb-2">Current Bid: {asset.bids}</p>
            <p className="text-sm mb-2">Time Left: {asset.hours}:{asset.minutes}:{asset.seconds}</p>
            </div>
          </Link>
        ))}
      </div>
      <Link to="/home" className="block mt-4 text-cyan-500 font-bold mx-2 hover:underline">Back to Home</Link>
    </div>
  );
};

export default AuctionPage;