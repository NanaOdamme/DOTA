// AuctionDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Assets from './db.json';
import Footer from './Footer';
const AuctionDetailPage = () => {
  const { id } = useParams(); // Fetch the asset ID from the URL
  const [asset, setAsset] = useState(null);

  useEffect(() => {
    // Simulate fetching asset details from the API or JSON file
    const fetchAssetDetails = () => {
      const foundAsset = Assets.assets.find((item) => item.id === parseInt(id));
      if (foundAsset) {
        setAsset(foundAsset);
      } else {
        // Handle case when asset is not found
        console.error('Asset not found');
      }
    };

    fetchAssetDetails();
  }, [id]);

  if (!asset) {
    return <div>Loading...</div>; // Add a loading state if needed
  }

  return (
    <div className=" bg-black p-2 pt-20">
      
      <h1 className="text-2xl text-white font-bold mb-4">{asset.title}</h1>
      <div className="grid lg:grid-cols-2 gap-2">
      <img src={asset['asset-image']} alt={asset.title} className="w-full h-96 mb-2 rounded-lg " />
      <div className="div">
      <p className="text-white mb-2">{asset.info}</p>
      <p className="text-white mb-2">Current Bid: ${asset.bids}</p>
      <p className="text-white mb-2">End Date: {asset.hours} Days, {asset.minutes} Minutes, {asset.seconds} Seconds</p>
      
      </div>
      </div>
      <div className="text-white border rounded-lg overflow-hidden lg:w-80">
              <div className="flex">
                <div className="flex-1 border-r px-4 py-2">Auction Prize</div>
                <div className="flex-1 px-4 py-2">Prize</div>
              </div>
              <div className="flex">
                <div className="flex-1 border-r px-4 py-2">
                  {asset['auction-prize']}
                </div>
                <div className="flex-1 px-4 py-2">
                  {asset['selling-prize']}
                </div>
              </div>
            </div>
            <div className="mt-2">
              <button className="mt-2 mb-2 bg-white mx-1 w-24 hover:bg-zinc-700 text-cyan-400 font-bold py-2 px-4 rounded">Bid</button>
              <button className="mt-2 mb-2 bg-cyan-500 mx-1 w-24 hover:bg-cyan-300 text-white font-bold py-2 px-4 rounded">Buy</button>
            </div>
      
      <Footer />
    </div>
  );
};

export default AuctionDetailPage;
