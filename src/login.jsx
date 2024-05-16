import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-900 flex justify-center py-12 sm:px-6 lg:px-8 'h-screen bg-cover bg-no-repeat" style={{ backgroundImage: "url('../assets/bg.gif')" }}>
      <div className="absolute inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('../assets/bg.gif')", filter: 'blur(8px)' }}></div>
      
      <div style={{ height: '60%' }} className="z-50 mt-16 lg:mt-2 w-full bg-zinc-800 border-white border flex rounded-2xl shadow-lg max-w-2xl p-5 ">
        <div className="sm:mx-auto w-full sm:w-full sm:max-w-md">

          <div className="px-2 lg:px-6 shadow sm:rounded ">
            <form className="" action="#" method="POST">

              <h2 className="font-bold text-1xl text-center text-cyan-500 mb-5">DOTA</h2>
              <h1 className='text-white lg:text-center font-bold text-2xl'>Welcome back to DOTA</h1>
              <h1 className='text-white mt-5 font-bold text-2xl'>Login</h1>

              <div className="mt-5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  required
                  className="text-white bg-zinc-900 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="mt-5 relative">
                <input
                  id="password"
                  name="password"
                  type={passwordVisible ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="Password"
                  required
                  className="text-white bg-zinc-900 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <i
                  id="togglePassword"
                  className={`bi ${passwordVisible ? 'bi-eye-slash' : 'bi-eye'} text-black absolute top-0 mt-2 text-white right-3 cursor-pointer`}
                  onClick={togglePasswordVisibility}
                ></i>
                <div className="text-sm mt-1 flex justify-end">
                <button className="text-xs cursor-pointer text-cyan-500">Forgot your Password?</button>
                </div>
              </div>

              <button className="w-full lg:h-12 py-2 mt-5 bg-cyan-500 hover:bg-cyan-300 font-bold text-white hover:scale-105 duration-300 rounded-full">
                Log In
              </button>
           
              
                <div className="mt-3 text-xs flex justify-end">
                  <p className='text-white'>Don't have an account</p>
                  
                  <Link to='/register' className="mx-2 text-red-500 font-bold hover:scale-105 duration-300 cursor-pointer">
                    <i>Register</i>
                  </Link>
                
              </div>

            </form>
          </div>
        </div>
        <div className="md:block hidden">
          <img style={{ height: '100%' }} className="rounded w-full" src="../assets/image (2).jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
