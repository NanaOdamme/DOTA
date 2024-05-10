import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Assets from './db.json';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  // Filter assets with genre "3d art"
  const filteredAssets = Assets.assets.filter((asset) => asset.genre === '3d art');

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className=""
      >
        {filteredAssets.map((asset) => (
          <SwiperSlide key={asset.id} className="swiper-slide contain">
            <button key={asset.id} onClick={() => window.location.href = `/details/${asset.id}`} className="asset-link">

            <img
              src={asset['asset-image']}
              alt={asset.title}
              className=""
            />
            <div className="hometext lg:pt-80 ">
              <span className="font-bold mx-4 text-2xl">{asset.title}</span>
              <div className="flex mt-10">
                <button
                  
                  className="mx-4 bg-gray-600 rounded bg-opacity-80 hover:bg-opacity-75 hover:bg-yellow-100 text-white font-bold py-1 px-4 shadow-md"
                >
                  Buy
                </button>
                <button
                  
                  className="mx-4 bg-gray-600 rounded bg-opacity-80 hover:bg-opacity-75 hover:bg-yellow-100 text-white font-bold py-1 px-4 shadow-md"
                >
                  Add to list <i className="bi bi-plus-circle"></i>
                </button>
              </div>
              <p>
                {asset.info}
                
              </p>
            </div>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
