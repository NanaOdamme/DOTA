import React, { useEffect, useState } from 'react';
import Assets from '../db.json';

const AssetDetails = ({ asset }) => {
  
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

  return (
    <section className="pt-20 lg:pt-24 assetid bg-black p-2 lg:p-10 text-white">
      {asset && (
       
        <div  className="lg:p-10 bg-zinc-800 m-5 rounded-lg">
          <div className="grid grid-cols-1  lg:grid-cols-2 md:grid-cols-2 gap-2 p-4">
            <img
              src={asset['asset-image']}
              style={{height: 450}}
              className="w-full lg:w-full  rounded-lg shadow-md border border-white border-2"
              alt="assetid"
            />
            <div className="py-4 px-4 lg:px-20">
              <button className="border border-2 border-white py-1 px-4 rounded-full">
              <i class="bi bi-heart mx-2"></i>
                {asset.likes}
              </button>
              <button className="border border-2 border-white py-1 px-4 rounded-full mx-5">
              <i class="bi bi-eye mx-2 "></i>
                {asset.watched}
              </button>
              <h4 className="mt-4">Creator</h4>
              <button>
                <div className="flex">
                  <img
                    src={asset['creator-image']}
                    className="w-10 h-10 rounded-full"
                    alt="Creator"
                  />
                  <h2 className="mt-2 mx-2 text-blue-400 hover:text-blue-800">
                    {asset.creator}
                  </h2>
                </div>
              </button>
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
              <div className="border rounded-lg overflow-hidden lg:w-80">
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
              <div className="mt-10"></div>
              <button
                style={{ backgroundColor: 'rgb(255, 0, 221)', fontWeight: 700 }}
                className="py-2 px-6 text-white rounded-full"
              >
                Buy This
              </button>
              <button
                style={{ backgroundColor: 'rgb(255, 0, 221)', fontWeight: 700 }}
                className="mx-5 py-2 px-10 text-white rounded-full ml-2"
              >
                Bid
              </button>
            </div>
          </div>
        </div>
      )}
       <section className="mb-10">
      <h1 className="mx-4 text-blue-400">Explore</h1>
      <div className="flex justify-between">
        <h1 className="mx-4 mb-10 text-white text-2xl">Explore More Assets</h1>
        <button type="button" onClick={() => window.location.href = "/allAssets"} className="mx-4 text-white">
  View All <i className="mx-6 bi bi-arrow-right"></i>
</button>

      </div>
      <div className="wrapper">
        <ul className="carousel">
          {Assets.assets.map((asset) => (
            <button key={asset.id} onClick={() => window.location.href = `/details/${asset.id}`} className="asset-list">
              <li className="card">
                <div className="flex mx-2 auction">
                  <div className="p-4 main-card max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    className="object-cover object-center rounded-lg"
                    src={asset['asset-image']}
                      alt="Card"
                    />

                    <h2 className="text-xl font-bold mx-2 mt-5 mb-3">{asset.title}</h2>
                    <div className="flex">
                      <img src={asset['creator-image']} className="imge" alt="" />
                      <p className="text-center mt-4 mx-4">{asset.creator}</p>
                    </div>
                    <div className="mt-6 flex justify-between">
                      <p>{asset.bids} bids</p>
                      <p>{asset.oneOfOne}</p>
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
    </section>
  );
};

export default AssetDetails;
