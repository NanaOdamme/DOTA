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
        <h1 className="mx-4 mb-10 dark:text-white text-black text-2xl">Explore More Assets</h1>
        <button type="button" onClick={() => window.location.href = "/allAssets"} className="mx-4 text-white">
          View All <i className="mx-6 bi bi-arrow-right"></i>
        </button>
      </div>
<div className="wrapper">
<ul className="carousel">
  {Assets.assets.map((asset) => (
    <button key={asset.id} onClick={() => window.location.href = `/details/${asset.id}`} className="asset-list">
  <li className="card  hover:text-black">
             <div className="flex mx-2 auction ">
               <div className="p-4 dark:bg-zinc-800 bg-purple-200 dark:text-white text-black main-card max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
                 <img
                   className="object-cover object-center rounded-lg w-64 h-48  transition duration-500 transform hover:-translate-y-1"
                   src={asset['asset-image']}
                   alt="Card"
                 />
                 
                 <h2 className="text-sm font-bold mx-2 mt-5 mb-3">{asset.title}</h2>
                 <div className="flex">
                   <img src={asset['creator-image']} className="imge" alt="" />
                   <p className="text-center mt-4 mx-4">{asset.creator}</p>
                 </div>
                 <div className="mt-6 flex justify-end">
                   
                   <p>{asset.total}</p>
                 </div>
               </div>
             </div>
           </li>
    </button>
  ))}
</ul>
<i className="bi-first dark:bg-zinc-800 hover:bg-zinc-600 dark:text-white  text-black bg-purple-500 rounded-lg bi bi-arrow-left-short" id="left" onClick={scrollLeft}></i>
        <i className="bi-second dark:bg-zinc-800 hover:bg-zinc-600  dark:text-white text-black rounded-lg bg-purple-500 bi bi-arrow-right-short" id="right" onClick={scrollRight}></i>
</div>
</section>
)
};

export default Carousel;