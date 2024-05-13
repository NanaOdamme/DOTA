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

            <main className="mt-10 mb-10">
                <h1 className="text-cyan-300 mx-7 font-bold text-3xl">Meet DOTA Creators</h1>
                <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 p-4">
                    {creators.map((creator, index) => (
                       <Link key={index} to={`/creators/${creator.id}`} className="this-card bg-teal-100 rounded">
                            <img src={creator.image} alt="Image" className="rounded" />
                            <div className="info absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white p-4 transition-opacity">
                                <h3 className="font-semibold text-lg mb-2">{creator.name}</h3>
                                <p className="text-sm">{creator.Bio}</p>
                            </div>
                        </Link>
                    ))}
                </section>
            </main>

            <Footer />
        </section>
    );
};

export default Creators;
