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
    <section className=" bg-zinc-800 px-2 pt-20">
      
      <h1 className="lg:ml-20 mt-10 text-2xl text-white font-bold mb-4">{asset.title}</h1>
      <div className="grid lg:grid-cols-2 gap-2">
      <img src={asset['asset-image']} alt={asset.title} className="lg:ml-20  lg:w-96  w-full  lg:h-96 mb-2 rounded-lg border border-white" />
      <div className="div p-4">
        <h1 className='text-white font-bold text-2xl'>Description</h1>
      <p className="text-white mb-6">{asset.info}</p>
      <p className="text-white mb-4">Current Bid: ${asset.bids}</p>
      <p className="text-white mb-5">End Date: {asset.hours} Days, {asset.minutes} Minutes, {asset.seconds} Seconds</p>
      <div className="text-white border rounded-lg overflow-hidden">
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
            <div className="flex justify-end mt-6 mr-4">
            <button
              className="rounded-lg bg-zinc-200 py-2 px-10 text-black font-bold hover:bg-zinc-900 hover:text-white"
            >
              Buy
            </button>
            <button
              
              className="ml-3 rounded-lg bg-zinc-900 py-2 px-10 text-white font-bold hover:bg-zinc-200 hover:text-black"
            >
              Bid
            </button>
            </div>
      </div>
      </div>
     
       
      
      <Footer />
    </section>
  );
};

export default AuctionDetailPage;