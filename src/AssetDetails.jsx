import React, { useEffect, useState } from 'react';
import Assets from './db.json';
import Footer from './Footer.jsx';
import Creators from './creators.json';
import { Link } from 'react-router-dom'; 
import Carousel from './carousel.jsx';


const AssetDetails = ({ asset }) => {
  const [creatorsData, setCreatorsData] = useState([]); 
  
  useEffect(() => {
    setCreatorsData(Creators.creators); 
  }, []);

 
    

    
      

    

   

   
 

  return (
    <section className="pt-20 lg:pt-24 assetid bg-black p-2 lg:p-10 text-white">
    {asset && (
      <div className="lg:p-10 bg-zinc-800 m-5 rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2 p-4">
          <div className="grid grid-cols-1 gap-4">
          <img
            src={asset['asset-image']}
            
            className="w-full h-96 rounded-lg shadow-md border border-white border-2"
            alt="assetid"
          />
           <div className="border rounded-lg overflow-hidden ">
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
          </div>
          <div className="py-4 px-4 lg:px-20">
            <button className="border border-2 border-white py-1 px-4 rounded-full">
              <i className="bi bi-heart mx-2"></i>
              {asset.likes}
            </button>
            <button className="border border-2 border-white py-1 px-4 rounded-full mx-5">
              <i className="bi bi-eye mx-2 "></i>
              {asset.watched}
            </button>
            <h4 className="mt-4">Creator</h4>
            <div className="flex items-center">
              {creatorsData.map((creator, index) => {
                if (creator['creator-id'] === asset['creator-id']) {
                  return (
                    <React.Fragment key={creator['creator-id']}>
                      <img
                        src={creator.image}
                        className="w-10 h-10 rounded-full"
                        alt="Creator"
                      />
                      <Link key={index} to={`/creators/${creator.id}`} >
                      <h2 className="mt-2 mx-2 text-blue-400 hover:text-blue-800">
                        {creator.name}
                      </h2>
                      </Link>
                    </React.Fragment>
                  );
                }
                return null;
              })}
            </div>
            <h1 className="mt-5 mb-2 lg:text-5xl md:text-3xl text-2xl">
              {asset.title}
            </h1>
            <p>{asset.description}</p>
            <i className="text-blue-400">genre</i>
            <p style={{ fontWeight: 700 }} className="mb-6">
              {asset.genre}
            </p>
            <p className='mb-4'>
              {asset.info}
            </p>
           
            
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
    )}
  <Carousel />
    <Footer />
  </section>
);
};
  
export default AssetDetails;
