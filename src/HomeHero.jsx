import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Assets from './db.json';
import { Link } from 'react-router-dom';
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
              <img
                src={asset['asset-image']}
                alt={asset.title}
                className=""
              />
              <div className="hometext lg:pt-80 text-white">
                <span className="font-bold mx-4">{asset.title}</span>
                <div className="flex mt-10">
                <Link key={asset.id} to={`/details/${asset.id}`} className="mx-4 bg-zinc-800 rounded bg-opacity-80 text-sm hover:bg-opacity-75 hover:bg-zinc-500  text-white font-bold py-1 px-4 shadow-md">
                    More Info
                  </Link>
                  <button className="mx-4 bg-zinc-800 text-sm rounded bg-opacity-80 hover:bg-opacity-75 hover:bg-zinc-500 text-white font-bold py-1 px-4 shadow-md">
                    Add to list <i className="bi bi-plus-circle"></i>
                  </button>
                </div>
                <p className='w-64 lg:w-96 ml-4 mt-2'>{asset.info}</p>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}