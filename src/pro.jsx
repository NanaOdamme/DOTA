import React from "react";
import Footer from './Footer';

const Pro = () => {
  return (
    <>
      <div className="pt-20 bg-gray-200 dark:bg-zinc-800 ">
        <div className="mb-1 mt-6 text-center">
          <h1 className="mb-4 text-4xl font-black text-black dark:text-white">Subscription Plans</h1>
          <p className="text-lg font-medium text-black dark:text-white">
          We have different subscription Plan for your needs.
          Select a plan to suits your budget and meets your goals.
          </p>
        </div>
        <div className="flex justify-center mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 py-5 px-10 gap-8">
            <div className="bg-sky-300 py-5 px-8 rounded-lg shadow-lg flex flex-col justify-between" style={{ width: 280 }}>
              <div>
                <h5 className="font-bold mb-5">Basic</h5>
                <h1 className="text-5xl font-bold mb-5">Free</h1>
                <p className="font-bold mb-5">Get started with Basic Plan</p>
                <ul className="mb-5">
                 <li className="mb-1"><i className="bi bi-check-circle-fill"></i> 1 User</li>
                  <li className="mb-1"><i className="bi bi-check-circle-fill"></i> Up to 5 LPs</li>
                  <li className="mb-1"><i className="bi bi-check-circle-fill"></i> Up to 20 Wallets</li>
                  <li className="mb-1"><i className="bi bi-check-circle-fill"></i> Up to 5 NFTs</li>
                  <li className="mb-1"><i className="bi bi-check-circle-fill"></i> 5 GB Storage</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <button className="bg-zinc-900 rounded-lg shadow-lg text-white py-3 px-10 w-56">Start Free Plan</button>
              </div>
            </div>
            <div className="bg-yellow-400 py-5 px-8 rounded-lg shadow-lg flex flex-col justify-between" style={{ width: 280 }}>
              <div>
                <h5 className="font-bold mb-5">Advanced</h5>
                <h1 className="text-5xl font-bold mb-5">$29</h1>
                <p className="font-bold mb-5">Get Advanced Plan</p>
                <ul className="mb-5">
                <li className="mb-1"><i className="bi bi-check-circle-fill"></i> 15 Users</li>
                  <li className="mb-1"><i className="bi bi-check-circle-fill"></i> Up to 100 LPs</li>
                  <li className="mb-1"><i className="bi bi-check-circle-fill"></i> Up to 100 Wallets</li>
                  <li className="mb-1"><i className="bi bi-check-circle-fill"></i> Up to 100 NFTs</li>
                  <li className="mb-1"><i className="bi bi-check-circle-fill"></i> 100 GB Storage</li>
                  <li className="mb-1"><i className="bi bi-check-circle-fill"></i> 1 NFT Pattern</li>
                  <li className="mb-1"><i className="bi bi-check-circle-fill"></i> 24/7 Support</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <button className="bg-zinc-900 rounded-lg shadow-lg text-white py-3 px-13 w-56">Start Advanced Plan</button>
              </div>
            </div>
            <div className="bg-rose-400 py-5 px-8 rounded-lg shadow-lg flex flex-col justify-between" style={{ width: 280 }}>
              <div>
                <h5 className="font-bold mb-5">Pro</h5>
                <h1 className="text-5xl font-bold mb-5">$79</h1>
                <p className="font-bold mb-5">Perfect Solution for NFT Enthusiasts.</p>
                <ul className="mb-5">
                  <li className="mb-1"><i className="bi bi-check-circle-fill"></i> 35 Users</li>
                 <li className="mb-1"><i className="bi bi-check-circle-fill"></i> Up to 200 LPs</li>
                  <li className="mb-1"><i className="bi bi-check-circle-fill"></i> Up to 200 Wallets</li>
                  <li className="mb-1"><i className="bi bi-check-circle-fill"></i> Up to 200 NFTs</li>
                  <li className="mb-1"><i className="bi bi-check-circle-fill"></i> 200 GB Storage</li>
                  <li className="mb-1"><i className="bi bi-check-circle-fill"></i> Any volume Swap Alerts</li>
                  <li className="mb-1"><i className="bi bi-check-circle-fill"></i> 24/7 Support</li>
                  <li className="mb-1"><i className="bi bi-check-circle-fill"></i> 3 NFT Patterns</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <button className="bg-zinc-900 rounded-lg shadow-lg text-white py-3 px-10 w-56">Start Pro Plan</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Pro;
