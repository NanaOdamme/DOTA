import React, { useEffect, useState } from 'react';
import Assets from './db.json';
import Creators from './creators.json';

const Carousel = () => {
  const [creatorsData, setCreatorsData] = useState([]); 
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [startScrollLeft, setStartScrollLeft] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);


useEffect(() => {
    setCreatorsData(Creators.creators); 
  }, []);

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

return(
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
            <div className="mt-2 flex justify-between">
                    <p className='text-white'>{asset.days} Days</p>
                      <p>Time Left: {asset.hours}:{asset.minutes}:{asset.seconds}</p>
                    </div>
            <h2 className="text-xl font-bold mx-2 mt-5 mb-3">{asset.title}</h2>
            <div className="flex">
            {creatorsData.map((creator) => {
        if (creator['creator-id'] === asset['creator-id']) {
          return (
            <React.Fragment key={creator['creator-id']}>
              <img src={creator.image} className="imge" alt="" />
              <p className="text-center mt-4 mx-4">{creator.name}</p>
              </React.Fragment>
          );
        }
        return null;
      })}
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
)
};

export default Carousel;