import React, { useState, useRef, useEffect } from 'react';
import Assets from './db.json';
import HomeHero from './HomeHero.jsx';
import Footer from './Footer.jsx';
import { Link } from 'react-router-dom'; // Import Link from React Router
import creatorsData from './creators.json'; // Importing the JSON data
import DiscoverSection from './scrollers.jsx'

const Home = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    // Extract the first 6 creators from the creatorsData array
    const firstSixCreators = creatorsData.creators.slice(0, 6);
    setCreators(firstSixCreators);
  }, []);

  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller');

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }
  }, []);

  const addAnimation = (scrollers) => {
    scrollers.forEach((scroller) => {
      scroller.setAttribute('data-animated', true);

      const innerScroller = scroller.querySelector('.scroller_inner');
      const scrollerContent = Array.from(innerScroller.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute('aria-hidden', true);
        innerScroller.appendChild(duplicatedItem);
      });
    });
  };

  
  const [scrollPosition, setScrollPosition] = useState(0);
  const imageScrollerRef = useRef(null);

  const handleScroll = (scrollOffset) => {
    const newScrollPosition = scrollPosition + scrollOffset;
    setScrollPosition(newScrollPosition);
    imageScrollerRef.current.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth',
    });
  };

  const popularAssets = Assets.assets.filter((asset) => asset.status === 'popular');

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [startScrollLeft, setStartScrollLeft] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    const carousel = document.querySelector(".carousel");
    const wrapper = document.querySelector(".wrapper");
    const firstCard = carousel.querySelector(".card");
    const firstCardWidth = firstCard.offsetWidth;

    const dragStart = (e) => {
      setIsDragging(true);
      carousel.classList.add("dragging");
      setStartX(e.pageX);
      setStartScrollLeft(carousel.scrollLeft);
    };

    const dragging = (e) => {
      if (!isDragging) return;

      const newScrollLeft = startScrollLeft - (e.pageX - startX);

      if (
        newScrollLeft <= 0 ||
        newScrollLeft >= carousel.scrollWidth - carousel.offsetWidth
      ) {
        setIsDragging(false);
        return;
      }

      carousel.scrollLeft = newScrollLeft;
    };

    const dragStop = () => {
      setIsDragging(false);
      carousel.classList.remove("dragging");
    };

    const autoPlay = () => {
      if (window.innerWidth < 800) return;

      const totalCardWidth = carousel.scrollWidth;
      const maxScrollLeft = totalCardWidth - carousel.offsetWidth;

      if (carousel.scrollLeft >= maxScrollLeft) return;

      setTimeoutId(setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500));
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);

    return () => {
      carousel.removeEventListener("mousedown", dragStart);
      carousel.removeEventListener("mousemove", dragging);
      document.removeEventListener("mouseup", dragStop);
      wrapper.removeEventListener("mouseenter", () => clearTimeout(timeoutId));
      wrapper.removeEventListener("mouseleave", autoPlay);

      clearTimeout(timeoutId);
    };
  }, [isDragging, startX, startScrollLeft, timeoutId]);

  const scrollLeft = () => {
    const carousel = document.querySelector(".carousel");
    const firstCard = carousel.querySelector(".card");
    const firstCardWidth = firstCard.offsetWidth;
    carousel.scrollLeft -= firstCardWidth;
  };

  const scrollRight = () => {
    const carousel = document.querySelector(".carousel");
    const firstCard = carousel.querySelector(".card");
    const firstCardWidth = firstCard.offsetWidth;
    carousel.scrollLeft += firstCardWidth;
  };

  const auctionAssets = Assets.assets.filter((asset) => asset['auction-status'] === 'True');
  return (
    
    <section className=" dark:bg-black bg-gray-100 text-black">
      <div className="content">
      <section className="home" id="home">
      <HomeHero />
      </section>
        <section className="scrollers mb-10 ">
          <div className="h1">
            <h1 className="mx-4 dark:text-white text-2xl">Popular on DOTA</h1>
          </div>
          <div className="flex image-scroller p-4 rounded-lg " ref={imageScrollerRef}>
            {popularAssets.map((asset) => (
             <Link key={asset.id} to={`/details/${asset.id}`} className="asset-link">
             <div className="image-container">
               <img src={asset['asset-image']} alt={asset.title} className="h-64  shadow-lg" />
               <div className="hover-text">{asset.title}</div>
             </div>
           </Link>
            ))}
          </div>
          <div className="flex justify-between mx-5 font-bold dark:text-cyan-500 text-black">
            <button id="prevButton" onClick={() => handleScroll(-200)}>
              prev
            </button>
            <button id="nextButton" onClick={() => handleScroll(200)}>
              next
            </button>
          </div>
        </section>

        
      <section className="mt-10 mb-10">
      <h1 className="mx-4 dark:text-blue-400">Creative Artists</h1>
      <div className="flex justify-between">
      
        <h1 className="mx-4 mb-10 dark:text-white text-2xl">Top Sellers</h1>
        <Link to="/creators" className="mx-4 dark:text-white">
              View All<i className="mx-6 bi bi-arrow-right"></i>
            </Link>
      </div>
      <div className="creator">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
        {creators.map((creator, index) => (
                <Link key={index} to={`/creators/${creator.id}`}>
                  <div className="dark:text-white border border-black card dark:bg-zinc-900 bg-white rounded-lg dark:shadow-md transition duration-500 transform hover:-translate-x-1 hover:bg-zinc-200 hover:text-black">
                    <div className="flex items-center p-4">
                      <img src={creator.image} className="w-12 h-12 rounded-full lg:mx-4 mr-2" alt="" />
                      <div className="flex flex-col">
                        <p className='text-sm'>{creator.name}</p>
                        <p><i className="dark:text-cyan-400 text-red-500 bi bi-hearts"></i> {creator.likes}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </section>
    <DiscoverSection />

    <section className="mb-10">
      <h1 className="mx-4 dark:text-blue-400 ">Auctions</h1>
      <div className="flex justify-between">
        <h1 className="mx-4 mb-10 dark:text-white text-2xl">Bid On Assets</h1>
        <Link to="/auctions" className="mx-4 dark:text-white">
  View All <i className="mx-6 bi bi-arrow-right"></i>
</Link>

      </div>
      <div className="wrapper">
        <ul className="carousel ">
          {auctionAssets.map((asset) => (
           <Link to={`/auction/${asset.id}`} className="asset-list ">
           <li className="card  hover:text-black">
             <div className="flex mx-2 auction ">
               <div className="p-4 dark:bg-zinc-800 border border-2 border-purple-600 dark:border-black dark:text-white main-card max-w-xs bg-purple-300 rounded-lg shadow-md overflow-hidden">
                 <img
                   className="object-cover object-center rounded-lg w-64 h-48  transition duration-500 transform hover:-translate-y-1"
                   src={asset['asset-image']}
                   alt="Card"
                 />
                 <div className="mt-2 flex justify-between">
                   <p>{asset.days} Days</p>
                   <p>Time Left: {asset.hours}:{asset.minutes}:{asset.seconds}</p>
                 </div>
                 <h2 className="text-sm font-bold mx-2 mt-5 mb-3">{asset.title}</h2>
                 <div className="flex">
                   <img src={asset['creator-image']} className="imge" alt="" />
                   <p className="text-center mt-4 mx-4">{asset.creator}</p>
                 </div>
                 <div className="mt-6 flex justify-between">
                   <p>{asset.bids} bids</p>
                   <p>{asset.total}</p>
                 </div>
               </div>
             </div>
           </li>
         </Link>
            
          ))}
        </ul>
        <i className="bi-first dark:bg-zinc-800 dark:hover:bg-zinc-600 hover:bg-blue-500 dark:text-white bg-blue-200  rounded-lg bi bi-arrow-left-short" id="left" onClick={scrollLeft}></i>
        <i className="bi-second dark:bg-zinc-800 dark:hover:bg-zinc-600  dark:text-white bg-blue-200 hover:bg-blue-500 rounded-lg  bi bi-arrow-right-short" id="right" onClick={scrollRight}></i>
      </div>
    </section>
  

 <section className="create-n-sell mb-10">
      <h1 className="mx-4 dark:text-blue-400">Be a creator</h1>
      <div className="flex justify-between">
        <h1 className="mx-4 mb-10 dark:text-white text-2xl">Create and sell your asset</h1>
        <a href="create-account.html" className="mx-4 dark:text-white">Get started<i className="mx-6 bi bi-arrow-right"></i></a>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 p-3">
        <div className="first bg-purple-300 text-black">
          <i className="dark:text-purple-600 text-cyan-700 text-3xl bi bi-wallet2"></i>
          <h2 className="font-bold dark:text-purple-600 text-cyan-700 text-2xl">Set up your Account</h2>
          <p className="text-zinc-700">Log in to your new account using your email and password. Complete your profile by clicking on "My Profile" and adding a profile picture, bio, and links to your social media profiles or personal website. Finally, connect your cryptocurrency wallet (MetaMask, Trust Wallet, or Coinbase Wallet) by following the secure connection instructions provided.</p>
        </div>
        <div className="first bg-purple-300 text-black ">
          <i className="dark:text-purple-600 text-cyan-700 text-3xl bi bi-boxes"></i>
          <h2 className="font-bold dark:text-purple-600 text-cyan-700 text-2xl">Apply to Be a Creator</h2>
          <p className="text-zinc-700">Navigate to the "Become a Creator" section in the main menu. Fill out the application form with details about your artistic background, a portfolio of your work, and a brief explanation of why you want to join our platform. After submission, wait for approval; you will receive an email notification within 3-5 business days if your application is accepted.</p>
        </div>
        <div className="first bg-purple-300 text-black">
          <i className="dark:text-purple-600 text-cyan-700 text-3xl bi bi-file-plus"></i>
          <h2 className="font-bold dark:text-purple-600 text-cyan-700 text-2xl"> Start Minting Your Digital Assets</h2>
          <p className="text-zinc-700">Once approved, log in to your account and access your Creator Dashboard. Click on "Create Digital Asset" to upload your digital artwork, providing a title, description, and other relevant information. Choose your pricing model (fixed price or auction) and set your royalty percentage for secondary sales. Finally, review your details and click "Mint Digital Asset," then confirm the transaction in your connected wallet to complete the minting process.
          </p>
        </div>
        <div className="first bg-purple-300 text-black">
          <i className="dark:text-purple-600 text-cyan-700 text-3xl bi bi-card-list"></i>
          <h2 className="font-bold dark:text-purple-600 text-cyan-700 text-2xl">Promote and Sell Your Digital Assets</h2>
          <p className="text-zinc-700">Share your newly minted digital assets on social media and with your network to attract potential buyers. Engage with the community by participating in our forums, attending virtual events, and collaborating with other creators to increase your visibility and network within the platform.</p>
        </div>
      </div>
    </section>

      </div>

      <Footer />
    </section>
  );
};

export default Home;
