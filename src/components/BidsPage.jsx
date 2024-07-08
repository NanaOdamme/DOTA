import React, { useState, useEffect } from 'react';
import { useBids } from '../Context/BidsContext';
import Footer from './Footer';

const BidsPage = () => {
  const { bids, removeFromBids, updateBidAmount } = useBids();
  const [selectedAssets, setSelectedAssets] = useState([]);
  const [bidAmounts, setBidAmounts] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, []);

  const handleCheckboxChange = (assetId) => {
    const isSelected = selectedAssets.includes(assetId);
    if (isSelected) {
      setSelectedAssets(selectedAssets.filter((id) => id !== assetId));
    } else {
      setSelectedAssets([...selectedAssets, assetId]);
    }
  };

  const handleBidAmountChange = (assetId, value) => {
    setBidAmounts({ ...bidAmounts, [assetId]: value });
  };

  const handleSaveBidAmount = (assetId) => {
    const newBidAmount = bidAmounts[assetId];
    updateBidAmount(assetId, newBidAmount); // Call the context function to update the bid amount
    setBidAmounts({ ...bidAmounts, [assetId]: '' }); // Clear the input field after saving
  };

  const handleRemoveSelected = () => {
    selectedAssets.forEach((assetId) => {
      removeFromBids(assetId);
    });
    setSelectedAssets([]);
  };

  const wonBids = bids.filter((asset) => asset['auction-status'] === "True");
const lostBids = bids.filter((asset) => asset['auction-status'] === "False");

  

  return (
    <section className="pt-20 dark:bg-zinc-900 dark:text-gray-200">
      <div className=' p-10'>
        <h1 className="text-4xl font-bold mb-10 text-center dark:text-blue-400">All Bids</h1>

        {/* All Bids Table */}
        <div className="overflow-x-auto mb-12">
          <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 dark:shadow-lg">
            <thead className="bg-blue-500 text-white dark:bg-blue-700 dark:text-gray-200">
              <tr>
                <th className="px-6 py-3 text-left">Title</th>
                <th className="px-6 py-3 text-left">Auction Prize</th>
                <th className="px-6 py-3 text-left">Total Bids</th>
                <th className="px-6 py-3 text-left">Your Bid</th>
                <th className="px-6 py-3 text-left">Save</th>
                <th className="px-6 py-3 text-left">Remove</th>
              </tr>
            </thead>
            <tbody className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
              {bids.map((asset) => (
                <tr key={asset.id} className="border-b border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 transition">
                  <td className="px-6 py-4">{asset.title}</td>
                  <td className="px-6 py-4">{asset['auction-prize']}</td>
                  <td className="px-6 py-4">{asset.bids}</td>
                  <td className="px-6 py-4">
                    <input
                      type="number"
                      className="border border-gray-300 rounded px-3 py-2 w-24 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                      value={bidAmounts[asset.id] || ''}
                      onChange={(e) => handleBidAmountChange(asset.id, e.target.value)}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <button
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded dark:bg-blue-500 dark:hover:bg-blue-600"
                      onClick={() => handleSaveBidAmount(asset.id)}
                    >
                      Save
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedAssets.includes(asset.id)}
                      onChange={() => handleCheckboxChange(asset.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {selectedAssets.length > 0 && (
          <div className="mt-8 flex justify-center">
            <button
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded dark:bg-red-500 dark:hover:bg-red-600"
              onClick={handleRemoveSelected}
            >
              Remove Selected
            </button>
          </div>
        )}

        <div className="flex flex-col lg:flex-row justify-between mb-8">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-4">
            <h2 className="text-2xl font-bold mb-4 text-center lg:text-left dark:text-blue-400">Won Bids</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 dark:shadow-lg">
                <thead className="bg-green-600 text-white dark:bg-green-500 dark:text-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left">Title</th>
                    <th className="px-6 py-3 text-left">Bid Amount</th>
                    <th className="px-6 py-3 text-left">Remove</th>
                  </tr>
                </thead>
                <tbody className="bg-blue-50 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                  {wonBids.map((asset) => (
                    <tr key={asset.id} className="border-b border-gray-200 hover:bg-blue-100 dark:hover:bg-gray-600 transition">
                      <td className="px-6 py-4">{asset.title}</td>
                      <td className="px-6 py-4">{asset.bidAmount}</td>
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          checked={selectedAssets.includes(asset.id)}
                          onChange={() => handleCheckboxChange(asset.id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="w-full lg:w-1/2 ">
            <h2 className="text-2xl font-bold mb-4 text-center lg:text-left dark:text-red-400">Lost Bids</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 dark:shadow-lg">
                <thead className="bg-red-600 text-white dark:bg-red-500 dark:text-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left">Asset</th>
                    <th className="px-6 py-3 text-left">Bid Amount</th>
                    <th className="px-6 py-3 text-left">Remove</th>
                  </tr>
                </thead>
                <tbody className="bg-red-50 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                  {lostBids.map((asset) => (
                    <tr key={asset.id} className="border-b border-gray-200 hover:bg-red-100 dark:hover:bg-gray-600 transition">
                      <td className="px-6 py-4">{asset.title}</td>
                      <td className="px-6 py-4">{asset.bidAmount}</td>
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          checked={selectedAssets.includes(asset.id)}
                          onChange={() => handleCheckboxChange(asset.id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default BidsPage;
