import React, { useState, useRef, useEffect } from 'react';
import Assets from './db.json';
import HomeHero from './HomeHero.jsx';
import Footer from './Footer.jsx';
import { Link } from 'react-router-dom'; // Import Link from React Router
import creatorsData from './creators.json'; // Importing the JSON data

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
    
    <section className="neon-background bg-black">
      <div className="content">
      <section className="home" id="home">
        <HomeHero />
      </section>
        <section className="scrollers mb-10">
          <div className="h1">
            <h1 className="mx-4 text-white text-2xl">Popular on DOTA</h1>
          </div>
          <div className="flex image-scroller p-4 rounded-lg shadow-lg" ref={imageScrollerRef}>
            {popularAssets.map((asset) => (
             <Link key={asset.id} to={`/details/${asset.id}`} className="asset-link">
             <div className="image-container">
               <img src={asset['asset-image']} alt={asset.title} className="h-64" />
               <div className="hover-text">{asset.title}</div>
             </div>
           </Link>
            ))}
          </div>
          <div className="navigation-buttons">
            <button id="prevButton" onClick={() => handleScroll(-200)}>
              &lt; &lt; &lt;
            </button>
            <button id="nextButton" onClick={() => handleScroll(200)}>
              &gt; &gt; &gt;
            </button>
          </div>
        </section>
      <section className="mt-10 mb-10">
      <h1 className="mx-4 text-blue-400">Creative Artists</h1>
      <div className="flex justify-between">
      
        <h1 className="mx-4 mb-10 text-white lg:2xl">Top Sellers</h1>
        <Link to="/creators" className="mx-4 text-white">
              View All<i className="mx-6 bi bi-arrow-right"></i>
            </Link>
      </div>
      <div className="creator">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {creators.map((creator, index) => (
                <Link key={index} to={`/creators/${creator.id}`}>
                  <div className="card bg-gray-200 rounded-lg shadow-md">
                    <div className="flex items-center p-4">
                      <img src={creator.image} className="w-12 h-12 rounded-full mx-4" alt="" />
                      <div className="flex flex-col text-white">
                        <p>{creator.name}</p>
                        <p><i className="bi bi-hearts"></i> {creator.likes}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </section>

    <section className="mb-10">
      <h1 className="mx-4 text-blue-400">Auctions</h1>
      <div className="flex justify-between">
        <h1 className="mx-4 mb-10 text-white text-2xl">Bid On Assets</h1>
        <Link to="/auctions" className="mx-4 text-white">
  View All <i className="mx-6 bi bi-arrow-right"></i>
</Link>

      </div>
      <div className="wrapper">
        <ul className="carousel">
          {auctionAssets.map((asset) => (
            <button key={asset.id} onClick={() => window.location.href = `/details/${asset.id}`} className="asset-list">
              <li className="card">
                <div className="flex mx-2 auction">
                  
                  <div className="p-4 main-card max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
                  
                  <img
                    className="object-cover object-center rounded-lg w-52 h-52 lg:w-100 lg:h-80"
                    src={asset['asset-image']}
                      alt="Card"
                    />
                    <div className="mt-2 flex justify-between">
                    <p className='text-white'>{asset.days} Days</p>
                      <p>Time Left: {asset.hours}:{asset.minutes}:{asset.seconds}</p>
                    </div>
                    <h2 className="text-xl font-bold mx-2 mt-5 mb-3">{asset.title}</h2>
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
            </button>
            
          ))}
        </ul>
        <i className="bi bi-arrow-left-circle-fill" id="left" onClick={scrollLeft}></i>
        <i className="bi bi-arrow-right-circle-fill" id="right" onClick={scrollRight}></i>
      </div>
    </section>
    <section class="discover mb-10">
  <h1 class="mx-4 mb-10 text-white lg:2xl">Discover New Assets</h1>
  <div class="flex ">
    <div class="scroller" animation-duration="slow" data-direction="left">
        <div class="tag-list scroller_inner w-full">
            <p  class="gradient-border">Photography</p>
            <p class="gradient-border">Stickers</p>
            <p class="gradient-border">illustrations</p>
            <p class="gradient-border">graphics</p>
            <p class="gradient-border">icons</p>
            <p class="gradient-border">logos</p>
            <p class="gradient-border">animations</p>
           
        </div>
    </div>
</div>
<div className="flex ">
  <div className="scroller" animation-duration="slow" data-direction="right">
      <div className="tag-list scroller_inner w-full">
          <p className="gradient-border"> Music tracks</p>
          <p className="gradient-border">sound effects</p>
          <p className="gradient-border">Litecoin</p>
          <p className="gradient-border">Utility tokens</p>
          <p className="gradient-border">NFTs</p>
          <p className="gradient-border">3D models</p>
          <p className="gradient-border">digital sculptures</p>
          
      </div>
  </div>
</div>

 </section>

 <section className="create-n-sell mb-10">
      <h1 className="mx-4 text-blue-400">Be a creator</h1>
      <div className="flex justify-between">
        <h1 className="mx-4 mb-10 text-white lg:2xl">Create and sell your asset</h1>
        <a href="create-account.html" className="mx-4 text-white">Get started<i className="mx-6 bi bi-arrow-right"></i></a>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 p-3">
        <div className="first ">
          <i className="text-white bi bi-wallet2"></i>
          <h2 className="text-white">Set up your Account</h2>
          <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam neque laborum nobis reprehenderit tempora facilis.</p>
        </div>
        <div className="first ">
          <i className="bi bi-boxes"></i>
          <h2 className="text-white">Create your collection</h2>
          <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam neque laborum nobis reprehenderit tempora facilis.</p>
        </div>
        <div className="first ">
          <i className="bi bi-file-plus"></i>
          <h2 className="text-white">Add Your Asset</h2>
          <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam neque laborum nobis reprehenderit tempora facilis.</p>
        </div>
        <div className="first ">
          <i className="bi bi-card-list"></i>
          <h2 className="text-white">List them for Sale</h2>
          <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam neque laborum nobis reprehenderit tempora facilis.</p>
        </div>
      </div>
    </section>

      </div>

      <Footer />
    </section>
  );
};

export default Home;
