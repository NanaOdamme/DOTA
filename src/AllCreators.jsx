import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import creatorsData from './creators.json'; // Importing the JSON data
import Footer from './Footer';

const Creators = () => {
    const [creators, setCreators] = useState([]);

    useEffect(() => {
        setCreators(creatorsData.creators);
    }, []);

    return (
        <section className='bg-black'>
            <section className="hero shadow-lg">
                <div className="hero-text mt-20 mx-10">
                    <h1 className="mb-10 text-white text-start text-4xl mt-10">
                        <span className="neon">Explore</span> Creative Artists, <br />
                        Follow them and <br /> Get Updates on Assets
                    </h1>
                    <a href="#" className="mb-5 bg-cyan-400 py-2 px-5 font-bold rounded-full mt-5">Register As A Creator</a>
                </div>
            </section>

            <section className="mt-10 mb-10">
                <h1 className="text-cyan-300 mx-7 font-bold text-3xl">Meet DOTA Creators</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 ">
                    {creators.map((creator, index) => (
                       <Link key={index} to={`/creators/${creator.id}`} className="this-card bg-zinc-900  rounded-lg">
                            <div className="flex text-white">
                            <img src={creator.image} alt="Image" className="rounded-lg h-48 w-48 " />
                            
                                <h1 className='mx-5 mt-20 hidden lg:block'>See more of {creator.name}</h1>
                            </div>
                            <div className="info absolute bottom-0 left-0 right-0 bg-zinc-700 bg-opacity-75 text-white p-2  transition-opacity">
                                <h3 className="font-semibold  mb-2">{creator.name}</h3>
                                <p className="text-sm">Learn More...</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </section>
    );
};

export default Creators;
