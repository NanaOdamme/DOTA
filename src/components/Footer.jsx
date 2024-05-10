import React from 'react';


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white lg:p-20 p-5">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                <div className="logo">
                    <h1 className="mb-5 text-white text-5xl">DOTA</h1>
                    <div>
                        <p>Lorem, ipsum dolor sit<br />amet consectetur adipis<br />icing elit. Perfere<br />ndis et fugiat accusantium <br />autem non sit ducimus<br /> nam amet laboriosam ipsam?</p>
                    </div>
                    <div className="flex icons mt-4">
                        <i className="mx-1 px-2 py-1 bi bi-facebook"></i>
                        <i className="mx-1 px-2 py-1 bi bi-discord"></i>
                        <i className="mx-1 px-2 py-1 bi bi-instagram"></i>
                        <i className="mx-1 px-2 py-1 bi bi-twitter-x"></i>
                    </div>
                </div>
                <div className="links mx-5">
                    <h1 className="mb-9 text-white text-2xl">Communities</h1>
                    <ul>
                        <li>Help Center</li>
                        <li>Partners</li>
                        <li>Suggestions</li>
                        <li>Blog</li>
                        <li>Newsletter</li>
                    </ul>
                </div>
                <div className="links mx-5">
                    <h1 className="mb-9 text-white text-2xl">Useful Links</h1>
                    <ul>
                        <li>ALL ASSETS</li>
                        <li>Get started</li>
                        <li>Bids</li>
                        <li>Explore</li>
                        <li>Privacy & Terms</li>
                    </ul>
                </div>
                <div className="links text-center">
                    <h1 className="mb-9 text-white text-2xl">Subscribe to our Newsletter</h1>
                    <div className="max-w-xs mx-auto">
                        <form action="#" method="post" className="space-y-4 ">
                            <input type="email" name="email" id="email" placeholder="Enter your email"
                                className="md:w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 rounded-md px-4 py-2 text-gray-800 placeholder-gray-400" />
                            <button type="submit" className="submit  py-2 px-4 rounded-md">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="mt-5 border-b border-gray-300"></div>
            <div className="text-center mt-5">
                <p className="mb-6">Designed by @nanaakosua & @kingbygone</p>
                <a href="https://nanaodame.netlify.app" className="mx-2 px-5 p-2">Visit</a>
                <a href="https://www.kingbygon.com" className="mx-2 px-5 py-2">Visit</a>
            </div>
        </footer>
    );
}

export default Footer;
