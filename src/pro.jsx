import React from "react";
import Footer from './Footer'
const Pro = () => {
  return (
    <>
      <div className="pt-20 bg-gray-200 dark:bg-zinc-800 ">
        <div className="mb-1 mt-6 text-center">
          <h1 className="mb-4 text-4xl font-black text-white"> PRICING</h1>
          <p className="text-lg font-medium text-white">
            Choose a plan that works for you
          </p>
        </div>
        <div className="flex justify-center mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 py-5 px-10 gap-8">
          <div className=" bg-sky-300 py-5 px-8 rounded-lg shadow-lg" style={{width:280}}>
            <h5 className="font-bold mb-5">Basic</h5>
            <h1 className="text-5xl font-bold mb-5">Free</h1> 
            <p className="font-bold mb-5">Get started with the basic plan</p>
            <ul className="mb-16">
              <li className="mb-1"><i class="bi bi-check-circle-fill"></i> 1 User</li>
              <li className="mb-1"><i class="bi bi-check-circle-fill"></i> 2 Projects</li>
              <li className="mb-1"><i class="bi bi-check-circle-fill"></i> 5 GB Storage</li>
            </ul>
            <div className="flex justify-center ">
          <button className="bg-zinc-900 rounded-lg shadow-lg text-white py-3 px-10 w-56">Start Free Plan</button>
          </div>
          
          </div>
          <div className=" bg-yellow-400 py-5 px-8 rounded-lg shadow-lg" style={{width:280}}>
            <h5 className="font-bold mb-5">Basic</h5>
            <h1 className="text-5xl font-bold mb-5">Free</h1>
            <p className="font-bold mb-5">Get started with the basic plan</p>
            <ul className="mb-16">
              <li className="mb-1"><i class="bi bi-check-circle-fill"></i> 1 User</li>
              <li className="mb-1"><i class="bi bi-check-circle-fill"></i> 2 Projects</li>
              <li className="mb-1"><i class="bi bi-check-circle-fill"></i> 5 GB Storage</li>
              <li className="mb-1"><i class="bi bi-check-circle-fill"></i> 2 Projects</li>
              <li className="mb-1"><i class="bi bi-check-circle-fill"></i> 5 GB Storage</li>
            </ul>
            <div className="flex justify-center">
          <button className="bg-zinc-900 rounded-lg shadow-lg text-white py-3 px-10 w-96">Start Free Plan</button>
          </div>
          
          </div>
          <div className=" bg-rose-400 py-5 px-8 rounded-lg shadow-lg" style={{width:280}}>
            <h5 className="font-bold mb-5">Basic</h5>
            <h1 className="text-5xl font-bold mb-5">Free</h1>
            <p className="font-bold mb-5">Get started with the basic plan</p>
            <ul className="mb-16">
              <li className="mb-1"><i class="bi bi-check-circle-fill"></i> 1 User</li>
              <li className="mb-1"><i class="bi bi-check-circle-fill"></i> 2 Projects</li>
              <li className="mb-1"><i class="bi bi-check-circle-fill"></i> 5 GB Storage</li>
            </ul>
            <div className="flex justify-center">
          <button className="bg-zinc-900 rounded-lg shadow-lg text-white py-3 px-10 w-96">Start Free Plan</button>
          </div>
          
          </div>

          
          
        </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Pro;
