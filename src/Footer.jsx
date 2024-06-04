import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/newsletters', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setMessage('Subscribed successfully');
            } else {
                setMessage('Failed to subscribe');
            }
        } catch (error) {
            setMessage('An error occurred');
        }

        setEmail('');
    };

    return (
        <footer className="flex flex-col justify-center dark:bg-gray-900 bg-purple-600 text-white lg:p-10 p-3">
            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                <div className="logo">
                    <h1 className="mb-1 text-white text-4xl lg:text-5xl font-bold">DOTA</h1>
                    <div className='mb-3'>
                        <p>Welcome to DOTA, your premier online marketplace for exclusive digital assets. Discover, buy, and sell unique NFTs with ease and security.</p>
                    </div>
                    <div className="flex flex-wrap icons mt-2">
                        <i className="bg-zinc-700 mr-2 hover:bg-zinc-500 cursor-pointer rounded-lg px-2 py-1 bi bi-facebook"></i>
                        <i className="bg-zinc-700 mr-2 hover:bg-zinc-500 cursor-pointer rounded-lg px-2 py-1 bi bi-discord"></i>
                        <i className="bg-zinc-700 mr-2 hover:bg-zinc-500 cursor-pointer rounded-lg px-2 py-1 bi bi-instagram"></i>
                        <i className="bg-zinc-700 hover:bg-zinc-500 cursor-pointer rounded-lg px-2 py-1 bi bi-twitter-x"></i>
                    </div>
                </div>
                <div className="links">
                    <h1 className="mb-1 text-white text-1xl lg:text-3xl font-bold">Communities</h1>
                    <ul className=''>
                        <li className='hover:text-zinc-500 cursor-pointer'>Help Center</li>
                        <li className='hover:text-zinc-500 cursor-pointer'>Partners</li>
                        <li className='hover:text-zinc-500 cursor-pointer'>Suggestions</li>
                        <li className='hover:text-zinc-500 cursor-pointer'>Blog</li>
                        <li className='hover:text-zinc-500 cursor-pointer'>Newsletter</li>
                    </ul>
                </div>

                <div className="links">
                    <h1 className="mb-1 text-white lg:text-2xl font-bold text-1xl">Useful Links</h1>
                    <ul>
                        <Link to="/allassets"><li className='hover:text-zinc-500 cursor-pointer'>ALL ASSETS</li></Link>
                        <Link to="/pro"><li className='hover:text-zinc-500 cursor-pointer'>Get started</li></Link>
                        <Link to="/deals"><li className='hover:text-zinc-500 cursor-pointer'>Deals</li></Link>
                        <Link to="/creators"><li className='hover:text-zinc-500 cursor-pointer'>Creators</li></Link>
                        <Link to="/terms"><li className='hover:text-zinc-500 cursor-pointer'>Privacy & Terms</li></Link>
                        <Link to="/help"><li className='hover:text-zinc-500 cursor-pointer'>Help</li></Link>
                    </ul>
                </div>
                <div className="links">
                    <h1 className="mb-1 text-white lg:text-2xl text-1xl font-bold">Other Sites</h1>
                    <ul> 
                       <li> <a href="https://nanaodame.netlify.app" className="text-indigo-300 hover:text-zinc-500 cursor-pointer">Nana Akosua</a></li>
                       <li> <a href="https://www.kingbygone.com" className="text-indigo-300 hover:text-zinc-500 cursor-pointer">King Bygone</a></li>
                    </ul>
                </div>
            </div>
            <h1 className="mb-9 text-indigo-800 dark:text-rose-500 font-bold text-center text-2xl">Subscribe to our Newsletter</h1>
            <div className="flex justify-center">
                <form onSubmit={handleSubmit} className=" grid grid-cols-2 lg:grid-cols-2">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className=" focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700  rounded-md px-4 py-2 text-gray-800 placeholder-gray-400"
                    />
                    <button type="submit" className="submit mx-2 py-2 px-4 rounded-md">
                        Submit
                    </button>
                </form>
            </div>
            {message && <p className="text-center mt-4">{message}</p>}
            <div className="mt-5 border-b border-gray-300"></div>
            <div className="text-center mt-5">
                <p className="mb-6">Designed by @nanaakosua & @kingbygone</p>
            </div>
        </footer>
    );
};

export default Footer;
