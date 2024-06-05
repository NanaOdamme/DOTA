import React from 'react';
import { Link } from 'react-router-dom'
const HomeHero = () => {
  return (
    <section className="pt-20 mb-10">
      <div className=" rounded-lg lg:mx-10 px-6 shadow-lg dark:bg-gradient-to-r dark:from-indigo-800 dark:to-cyan-800 bg-gradient-to-r from-cyan-800 to-rose-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
        <div className="p-6 order-1 lg:order-2">
          <img src="/assets/hero.png" alt="Placeholder" className="w-full h-96"  />
        </div>
        <div className="flex flex-col items-center justify-center p-6 order-2 lg:order-1">
          <div>
            <h1 className="mb-5 text-4xl font-bold text-white">
              Discover, Collect<br />Hello And Sell Rare <span className="gradient-text">Assets</span>
            </h1>
            <p className="text-white italic">
              Welcome to DOTA – Your destination for premium digital assets, vibrant community engagement, and exclusive auctions. Discover high-quality photos, vectors, 3D models, and audio. Connect with creatives in our forums and user groups. Join DOTA today to elevate your projects and network with like-minded individuals.
            </p>
            <div className="flex mt-10">
              <Link to='/pro' className="mr-2 shadow-lg rounded-full mt-5 py-2 px-6 text-white bg-gradient-to-b from-rose-500 to-purple-600 dark:bg-gradient-b dark:from-cyan-500 dark:to-zinc-900">
                Get Started
              </Link>
              <Link to='/learn' className="shadow-lg rounded-full mt-5 py-2 px-6 text-rose-500 dark:text-cyan-500 bg-white">
                Learn More
              </Link>
            </div>
            <div className="flex mt-20">
              <div className="flex flex-col text-white mx-5">
                <h1 className="text-3xl">200+</h1>
                <p className="text-xs">Assets</p>
              </div>
              <div className="flex flex-col text-white mx-5">
                <h1 className="text-3xl">40+</h1>
                <p className="text-xs">Dedicated Creators</p>
              </div>
              <div className="flex flex-col text-white mx-5">
                <h1 className="text-3xl">12</h1>
                <p className="text-xs">Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default HomeHero;
