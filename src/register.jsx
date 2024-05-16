import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-900 flex justify-center py-12 sm:px-6 lg:px-8 'h-screen bg-cover bg-no-repeat" style={{ backgroundImage: "url('../assets/bg.gif')" }}>
      <div className="absolute inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('../assets/bg.gif')", filter: 'blur(8px)' }}></div>
      
      <div style={{ height: "60%" }} className="z-50 mt-16 lg:mt-2 w-full bg-zinc-800 border-white border flex rounded-2xl shadow-lg max-w-2xl p-5 ">
        <div className="sm:mx-auto  w-full sm:w-full sm:max-w-md">
          <div className="px-2 lg:px-6  shadow sm:rounded ">
            <form className="" action="#" method="POST">
              <h2 className="font-bold text-1xl text-center text-cyan-500 mb-5">DOTA</h2>
              <h1 className='text-white lg:text-center font-bold text-2xl'>Create, <br />Sell and Buy on <br/> DOTA </h1>
              <div className="cursor-pointer flex bg-zinc-900 text-white py-1 rounded-full mt-3 w-full lg:h-12 font-bold justify-center text-sm hover:scale-105 duration-300">
                <img src="./Google.svg" alt="google" className="h-6 w-6 m-2 lg:mt-2 mx-1 " />
                <p className="lg:mt-2 m-2">Login with Google</p>
              </div>

              <div className="mt-2 grid grid-cols-3 items-center text-gray-500">
                <hr className="text-gray-500" />
                <p className="text-center text-sm">OR</p>
                <hr className="text-gray-500" />
              </div>

              <div className='flex justify-between'>
                <div className="mt-5">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    autoComplete="name"
                    placeholder='username'
                    required
                    className="bg-zinc-900 text-white appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mt-5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder='email'
                    required
                    className="bg-zinc-900 text-white appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="mt-5 relative">
                <input
                  id="password"
                  name="password"
                  type={passwordVisible ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="Password"
                  required
                  className="bg-zinc-900 text-white appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <i
                  id="togglePassword1"
                  className={`bi ${passwordVisible ? 'bi-eye-slash' : 'bi-eye'} text- absolute top-1/4 right-3 cursor-pointer`}
                  onClick={togglePasswordVisibility}
                ></i>
              </div>

              <div className="mt-5 relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={confirmPasswordVisible ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="Confirm Password"
                  required
                  className="bg-zinc-900 text-white appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <i
                  id="togglePassword2"
                  className={`bi ${confirmPasswordVisible ? 'bi-eye-slash' : 'bi-eye'} text-white absolute top-1/4 right-3 cursor-pointer`}
                  onClick={toggleConfirmPasswordVisibility}
                ></i>
              </div>

              <div className="text-sm mt-1">
                <button className="text-xs cursor-pointer text-cyan-500">Forgot your Password?</button>
              </div>

              <button className="w-full lg:h-12 py-2 mt-3 bg-cyan-500 hover:bg-cyan-300 font-bold text-white hover:scale-105 duration-300 rounded-full">
                Sign Up
              </button>

              <div className="mt-3 text-xs flex justify-end">
                <p className='text-white'>Already have an account</p>
                <Link to='/login' className="mx-2 text-red-500 font-bold hover:scale-105 duration-300 cursor-pointer">
                  <i>Login</i>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="md:block hidden " >
          <img style={{ height: '100%' }} className="rounded w-full" src="../assets/image (2).jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
