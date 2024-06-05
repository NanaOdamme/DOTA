import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
const HomePage = () => {
  return (
    <div className="bg-cover h-screen flex items-center justify-center" style={{backgroundImage: "url('./public/assets/bg.gif')"}}>
      <div className="text-white text-center">
        <h1 className="lg:text-8xl text-4xl md:text-6xl font-bold mb-5">Welcome to Dota</h1>
        <p className="text-lg mb-10">A place to buy and sell digital Assets</p>
        <Link to={'/login'} className='text-white bg-teal-500 px-8 py-2 rounded mt-10 hover:bg-teal-200'>Get Started</Link>
      </div>
    </div>
  );
};

export default HomePage;
