import React, { useEffect, useState } from 'react';
import Footer from './Footer.jsx';
import Creators from '../storage/creators.json';
import { Link } from 'react-router-dom';
import Carousel from './carousel.jsx';
import { useBookmarks } from '../Context/BookmarkContext.jsx';
import { useCart } from '../Context/CartContext.jsx';
import { useBids } from '../Context/BidsContext.jsx';

const AssetDetails = ({ asset }) => {
  const [creatorsData, setCreatorsData] = useState([]);
  const { addBookmark } = useBookmarks();
  const { cart, addToCart } = useCart(); // Use useCart hook
  const [alert, setAlert] = useState(null); // State for alert message
  const { addToBids } = useBids();

  useEffect(() => {
    setCreatorsData(Creators.creators);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [asset]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleAddToCart = item => {
    const itemInCart = cart.find(cartItem => cartItem.id === item.id);
    if (itemInCart) {
      setAlert(`"${item.title}" is already in your cart!`);
      setTimeout(() => setAlert(null), 3000); // Hide alert after 3 seconds
    } else {
      addToCart(item);
      setAlert(`"${item.title}" has been added to your cart!`);
      setTimeout(() => setAlert(null), 3000); // Hide alert after 3 seconds
    }
  };
  const handleAddToBids = item => {
    addToBids(item);
  };

  return (
    <section className="pt-20 lg:pt-24 dark:bg-black bg-gray-100 p-2 text-white all">
      {asset && (
        <div className="lg:p-10 dark:bg-zinc-800 bg-white m-5 rounded-lg border border-zinc-900">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2 p-4">
            <div className="grid grid-cols-1 gap-4">
              <img
                src={asset['asset-image']}
                className="border border-zinc-900 w-full lg:h-96 rounded-lg shadow-md border border-white border-2"
                alt="assetid"
              />
              <div className="border rounded-lg overflow-hidden">
                <div className="flex text-black dark:text-white">
                  <div className="flex-1 border-r px-4 py-2">Auction Prize</div>
                  <div className="flex-1 px-4 py-2">Prize</div>
                </div>
                <div className="flex text-black dark:text-white">
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
              <div className="mt-2 grid grid-cols-2 gap-4">
                <div className="text-black dark:text-white flex px-2 py-2 border border-1 dark:border-white rounded-full">
                  <i className="dark-text-white bi bi-heart mx-2"></i>
                  <p>{asset.likes}</p>
                </div>
                <div className="text-black dark:text-white flex px-2 py-2 border border-1 dark:border-white rounded-full">
                  <i className="bi bi-eye mx-2"></i>
                  <p>{asset.watched}</p>
                </div>
              </div>
              <h4 className="mt-4 text-black dark:text-white">Creator</h4>
              <div className="flex items-center">
                {creatorsData.map((creator, index) => {
                  if (creator['creator-id'] === asset['creator-id']) {
                    return (
                      <React.Fragment key={creator['creator-id']}>
                        <img
                          src={creator.image}
                          className="w-10 h-10 rounded-full border border-2 border-zinc-900"
                          alt="Creator"
                        />
                        <Link key={index} to={`/creators/${creator.id}`}>
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
              <h1 className="mt-5 mb-2 lg:text-5xl md:text-3xl text-2xl dark:text-white text-black">
                {asset.title}
              </h1>
              <p>{asset.description}</p>
              <i className="text-blue-400">genre</i>
              <p style={{ fontWeight: 700 }} className="mb-6 text-black dark:text-white">
                {asset.genre}
              </p>
              <p className="mb-4 text-black dark:text-white">{asset.info}</p>
              <div className="flex justify-between">
            <div className='flex flex-wrap'>
              <button
                onClick={toggleDropdown}
                className="mx-2 mt-2 rounded-lg bg-zinc-200 py-2 px-10 text-black font-bold hover:bg-zinc-900 hover:text-white"
              >
                Buy
              </button>
              {isOpen && (
                <div className="absolute right-17 mt-14 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <button
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      onClick={() => handleAddToCart(asset)} // Use handleAddToCart function
                    >
                      Add to Cart
                    </button>

                  </div>
                </div>
              )}
              <button
                className="mx-2 mt-2 rounded-lg bg-zinc-900 py-2 px-10 text-white font-bold hover:bg-zinc-200 hover:text-black"
                onClick={() => handleAddToBids(asset)}
                >
                Bid
              </button>
            </div>
            <button
              onClick={() => addBookmark(asset)}
              className="font-bold px-2 rounded mx-1"
            >
              <i className="text-green-500 text-3xl bi bi-bookmark-plus-fill hover:text-green-300"></i>
            </button>
          </div>

          {/* Display alert message */}
          {alert && (
        <div className=" transform  bg-green-500 text-white py-2 px-4 rounded-lg shadow-md">
          {alert}
        </div>
          )}
        </div>
      </div>
    </div>
  )}
  <Carousel />
  <Footer />
</section>
  );
};

export default AssetDetails