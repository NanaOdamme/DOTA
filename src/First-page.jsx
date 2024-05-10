import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-cover h-screen flex items-center justify-center" style={{backgroundImage: "url('./assets/bg.gif')"}}>
      <div className="text-white text-center">
        <h1 className="text-8xl font-bold mb-4">Welcome to Dota</h1>
        <p className="text-lg">A place to buy and sell digital Assets</p>
        <button className='text-white bg-teal-500 px-8 py-2 rounded mt-10 hover:bg-teal-200'>Get Started</button>
      </div>
    </div>
  );
};

export default HomePage;
