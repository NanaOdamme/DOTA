import React, { useState, useRef, useEffect } from 'react';
import Assets from '../db.json';
import HomeHero from './HomeHero.jsx';
import Footer from './Footer.jsx';

const Home = () => {
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

  const creators = [
    { id: 1, name: '@loladeartist', hearts: '11.3k', imgSrc: 'assets/profile (5).jpg' },
    { id: 2, name: '@pixaessentric', hearts: '11.3k', imgSrc: 'assets/profile (1).jpg' },
    { id: 3, name: '@miakent101', hearts: '11.3k', imgSrc: 'assets/profile (2).jpeg' },
    { id: 4, name: '@romeonadulai', hearts: '11.3k', imgSrc: 'assets/profile (3).jpeg' },
    { id: 5, name: '@Henrydreamshade', hearts: '11.3k', imgSrc: 'assets/profile (6).jpeg' },
    { id: 6, name: '@Pauladiscolights', hearts: '11.3k', imgSrc: 'assets/profile (7).jpg' },
  ];

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
              <a key={asset.id} href={`/details/${asset.id}`} className="asset-link">
                <div className="image-container">
                  <img src={asset['asset-image']} alt={asset.title} className="h-64" />
                  <div className="hover-text">{asset.title}</div>
                </div>
              </a>
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
        <h1 className="mx-4 mb-10 text-white text-2xl">Top Sellers</h1>
        <a href="allcreators.html" className="mx-4 text-white">View All<i className="mx-6 bi bi-arrow-right"></i></a>
      </div>
      <div className="creator">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {creators.map((creator) => (
            <div key={creator.id} className="card bg-gray-200 rounded-lg shadow-md">
              <div className="flex items-center p-4">
                <img src={creator.imgSrc} className="w-12 h-12 rounded-full mx-4" alt="" />
                <div className="flex flex-col text-white">
                  <p>{creator.name}</p>
                  <p><i className="bi bi-hearts"></i> {creator.hearts}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section class="discover mb-10">
  <h1 class="mx-4 mb-10 text-white text-2xl">Discover New Assets</h1>
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
            <p class="gradient-border">Photography</p>
            <p class="gradient-border">Stickers</p>
            <p class="gradient-border">illustrations</p>
            <p class="gradient-border"> graphics</p>
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
        <h1 className="mx-4 mb-10 text-white text-2xl">Create and sell your asset</h1>
        <a href="create-account.html" className="mx-4 text-white">Get started<i className="mx-6 bi bi-arrow-right"></i></a>
      </div>

      <div className="flex justify-between mx-4">
        <div className="first">
          <i className="text-white bi bi-wallet2"></i>
          <h2 className="text-white">Set up your Account</h2>
          <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam neque laborum nobis reprehenderit tempora facilis.</p>
        </div>
        <div className="first mx-3">
          <i className="bi bi-boxes"></i>
          <h2 className="text-white">Create your collection</h2>
          <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam neque laborum nobis reprehenderit tempora facilis.</p>
        </div>
        <div className="first mx-3">
          <i className="bi bi-file-plus"></i>
          <h2 className="text-white">Add Your Asset</h2>
          <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam neque laborum nobis reprehenderit tempora facilis.</p>
        </div>
        <div className="first mx-3">
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
