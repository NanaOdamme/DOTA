import React, {useEffect} from 'react';
import { useBookmarks } from './BookmarkContext';  // Import the custom hook
import { Link } from 'react-router-dom';
import Footer from './Footer';
const Watchlist = () => {
  const { bookmarkedAssets, removeBookmark } = useBookmarks();  // Access bookmarked assets and remove function

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className=' pt-20  dark:bg-zinc-950 pt-10 all '>
    <section className="h-auto all  lg:mx-10  pb-10">
      <h1 className='mx-5 text-2xl dark:text-white text-black'>Your Bookmarks</h1>
      {bookmarkedAssets.length === 0 ? (
        <p className="mx-5 text-black dark:text-white">You have no bookmarks or Watchlist</p>
      ) : (
        <div className="p-6 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:p-4">
          {bookmarkedAssets.map((asset) => (
            <div key={asset.id} className="asset-link asset-card bg-white h-64 w-full dark:bg-zinc-900 border text-black border-zinc-900 hover:bg-yellow-200 dark:hover:bg-zinc-700 hover:-translate-y-2 transition duration-500 text-white lg:p-5 p-2 rounded-lg">
              <Link to={`/details/${asset.id}`}>
                <div className="">
                  <div className="p-1 grid grid-cols-1 lg:grid-cols-2 mb-2">
                    <div className="flex w-96">
                      {asset['creator-image'] && <img src={asset['creator-image']} alt={asset.creator} className="rounded-full h-10 w-10 mr-1 border border-2 border-zinc-900" />}
                      <div className="mx-2">
                        <h1 className="dark:text-gray-400 text-black text-sm">creator</h1>
                        <p className='dark:text-white text-black'>{asset.creator}</p>
                      </div>
                    </div>
                    <div className="flex justify-end lg:py-1 lg:px-2 rounded-lg h-6" style={{ fontSize: '12px' }}>
                      <i className="dark:text-white text-black mx-1 bi bi-heart"></i>
                      <p className="text-black dark:text-gray-200">{asset.likes}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="justify-center">
                      <img src={asset['asset-image']} alt="Asset" id={asset.id} className="rounded-lg w-48 h-32 lg:w-54 lg:h-54 transition duration-500 transform hover:scale-95 border border-2 border-zinc-900" />
                    </div>
                    <div className="grid grid-cols-1 ml-3">
                      <h1 className="dark:text-white text-black font-bold lg:text-1xl">{asset.title}</h1>
                      <p className="text-black dark:text-gray-400">current bids: {asset.bids} bids</p>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="flex justify-end dark:text-white font-bold px-2 rounded mx-1">
              <button 
                onClick={() => removeBookmark(asset.id)} 
                
              >
                <i className="text-red-500 text-2xl bi bi-bookmark-dash-fill"></i>
              </button>
              </div>
            </div>
          ))}
        </div>
      )}
     
    </section>
    <div className=''>
    <Footer />
    </div>
    </main>
  );
};

export default Watchlist;
