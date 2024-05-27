import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const validatePassword = () => {
    const errors = {};
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!passwordPattern.test(password)) {
      errors.password = 'Password must be at least 8 characters long, include at least one number, one capital letter, and one symbol.';
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validatePassword()) {
      try {
        const response = await axios.post('http://localhost:3001/users', {
          email,
          username,
          password,
        });
        if (response.status === 201) {
          navigate('/login');
        }
      } catch (error) {
        console.error('Error creating user:', error);
      }
    }
  };

  return (
    <div className="pt-20 px-10 min-h-screen bg-gray-900 flex justify-center py-12 sm:px-6 lg:px-8 'h-screen bg-cover bg-no-repeat" style={{ backgroundImage: "url('../assets/bg.gif')" }}>
      <div className="absolute inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('../assets/bg.gif')", filter: 'blur(8px)' }}></div>
      
      <div style={{ height: "60%" }} className="z-10 mt-16 lg:mt-2 w-full dark:bg-zinc-800 bg-white border-white border flex rounded-2xl shadow-lg max-w-2xl p-5 ">
        <div className="sm:mx-auto  w-full sm:w-full sm:max-w-md">
          <div className="px-2 lg:px-6  sm:rounded ">
            <form className="" onSubmit={handleSubmit} method="POST">
              <h2 className="font-bold text-1xl text-center text-cyan-500 mb-5">DOTA</h2>
              <h1 className='dark:text-white lg:text-center font-bold text-2xl'>Create, <br />Sell and Buy on <br/> DOTA </h1>
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
                    type="text"
                    autoComplete="name"
                    placeholder='username'
                    required
                    className="dark:bg-zinc-900 dark:text-white appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mt-5 lg:ml-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder='email'
                    required
                    className="dark:bg-zinc-900 dark:text-white appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                  className="dark:bg-zinc-900 dark:text-white appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i
                  id="togglePassword1"
                  className={`bi ${passwordVisible ? 'bi-eye-slash' : 'bi-eye'} dark:text-white absolute top-2 right-3 cursor-pointer`}
                  onClick={togglePasswordVisibility}
                ></i>
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>

              <div className="mt-5 relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={confirmPasswordVisible ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="Confirm Password"
                  required
                  className="dark:bg-zinc-900 dark:text-white appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <i
                  id="togglePassword2"
                  className={`bi ${confirmPasswordVisible ? 'bi-eye-slash' : 'bi-eye'} dark:text-white absolute top-2 right-3 cursor-pointer`}
                  onClick={toggleConfirmPasswordVisibility}
                ></i>
                {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
              </div>

              <div className="text-sm mt-1">
                <button className="text-xs cursor-pointer text-cyan-500">Forgot your Password?</button>
              </div>

              <button type="submit" className="w-full lg:h-12 py-2 mt-3 bg-cyan-500 hover:bg-cyan-300 font-bold text-white hover:scale-105 duration-300 rounded-full">
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
